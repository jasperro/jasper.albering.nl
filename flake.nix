{
  description = "jasper.albering.nl";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    devshell = {
      url = "github:numtide/devshell";
      inputs.nixpkgs.follows = "nixpkgs";
    };
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { flake-utils, devshell, nixpkgs, ... }:
    flake-utils.lib.eachDefaultSystem (system: {
      devShell =
        let
          pkgs = import nixpkgs {
            inherit system;

            overlays = [
              devshell.overlays.default
            ];
          };
        in
        pkgs.devshell.mkShell {
          devshell.packages = with pkgs; [
            nodejs_latest
            corepack_latest
          ];
        };
    });
}
