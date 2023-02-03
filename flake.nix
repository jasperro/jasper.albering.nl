{
  inputs = {
    dream2nix.url = "github:nix-community/dream2nix";
    nixpkgs.url = "nixpkgs/nixos-unstable";
    src.url = "github:prettier/prettier/2.4.1";
    src.flake = false;
  };

  outputs =
    { self
    , dream2nix
    , nixpkgs
    , src
    } @ inp:
    let
      l = nixpkgs.lib // builtins;

      systems = [ "x86_64-linux" ];
      forAllSystems = f:
        l.genAttrs systems (
          system:
          f system (nixpkgs.legacyPackages.${system})
        );

      d2n-flake = dream2nix.lib.makeFlakeOutputs {
        inherit systems;
        config.projectRoot = ./.;
        source = ./.;
        autoProjects = true;
        settings = [{
          subsystemInfo.nodejs = 19;
        }];
      };
    in
    dream2nix.lib.dlib.mergeFlakes [
      d2n-flake
      {
        devShell = forAllSystems (system: pkgs: (
          import ./shell.nix { inherit pkgs; }
        ));
      }
      {
        # checks.x86_64-linux.prettier = self.packages.x86_64-linux.prettier;
      }
    ];
}
