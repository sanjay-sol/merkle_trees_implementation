
import { keccak256 } from 'ethereumjs-util';

type Tree = {

}

type Root = {

}

type TreeNode = {

}
type Proof = typeof keccak256[] | typeof keccak256;


class MerkleTree  {
    constructor() { }

    getRoot(): Root {
        return 
    }

  verify(proof: Proof, root: Root, node: TreeNode): boolean {
    return true || false;
  }
}