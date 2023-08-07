{
  description = "jasper.albering.nl";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
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
                nodejs = prev.nodejs_20;
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
