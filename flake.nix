{
  description = "jasper.albering.nl";

  inputs = {
    devshell.url = "github:numtide/devshell";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, flake-utils, devshell, nixpkgs }:
    flake-utils.lib.eachDefaultSystem (system: {
      devShell =
        let
          pkgs = import nixpkgs {
            inherit system;

            overlays = [
              (final: prev: {
                nodejs = prev.nodejs-19_x;
              })
              devshell.overlays.default
            ];
          };
        in
        pkgs.devshell.mkShell {
          devshell.packages = with pkgs; [
            nodejs
            nodePackages.pnpm
          ];
        };
    });
}
