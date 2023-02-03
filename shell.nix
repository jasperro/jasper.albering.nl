{ pkgs ? import <nixpkgs> { } }:
pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs-19_x
    pkgs.nodePackages.pnpm
  ];
}
