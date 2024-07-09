import { createHash } from "crypto";

class MerkleTree {
  private leaves: string[];
  private layers: string[][];

  constructor(leaves: string[]) {
    this.leaves = leaves.map(this.hash);
    this.layers = [];
    this.buildTree();
  }

  private hash(data: string): string {
    return createHash("sha256").update(data).digest("hex");
  }

  private buildTree(): void {
    this.layers.push(this.leaves);

    while (this.layers[this.layers.length - 1].length > 1) {
      const currentLayer = this.layers[this.layers.length - 1];
      const nextLayer = [];

      for (let i = 0; i < currentLayer.length; i += 2) {
        if (i + 1 < currentLayer.length) {
          nextLayer.push(this.hash(currentLayer[i] + currentLayer[i + 1]));
        } else {
          nextLayer.push(currentLayer[i]);
        }
      }

      this.layers.push(nextLayer);
    }
  }

  public getRoot(): string {
    return this.layers[this.layers.length - 1][0];
  }

  public getProof(leaf: string): string[] {
      return;
  }

  public verifyProof(leaf: string, proof: string[], root: string): boolean {
    return;
  }
}


