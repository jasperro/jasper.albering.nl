{ pkgs ? import <nixpkgs> { } }:
let
  node = pkgs.nodejs-19_x;
in
pkgs.mkShell {
  buildInputs = [
    node
    node.pkgs.pnpm
  ];
}
