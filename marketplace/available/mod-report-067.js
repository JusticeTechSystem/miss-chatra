// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQVC0sVRUQz+G2pkOPNMghaN2kbTopU8ov9/qNQ2yJTvJD9PPY088EoOQvhxkwHU7rly2QkPa4/9CBo4pOoPn9pRSc6/rEmrVmrfIkl4vYc4hW6YEsDwKdU5gKlNUg9b0ggvXIjhieGOaO9TamTInPDDfW8yMIAJRCjqfaYDoghO6SFU8lH3V0iUml/dApsWXntPk2YE+1ZkEUBndoGQalW8n5flwFuVDLEfDg3gVnIHZNIHI0MGMCAOFSItSPKhbu3PqUJTwm/vbRiqoF+fSFS29Hfj7RULM9rOlnLeDJBPTakdqPUWA45tEjZ8BFtBrnPykDMXMgn3lNcYWOnjoK+At1Dw11G61aXFLSzTsaW+H3ezIgldfpgsHzHBu5JH16stIS3XCcn+x9Dg0uWkLwsU05KAEISSpdjl/8NFmBs2GklOX8sIEfC2LWllbPYwm+BCnG8GauJ2FAfBLHQ32RsVtbHkjCKKQXMIe3Bxr0joJfP544fxsKWQWkRov1TzvcHi+H3vKOAmL3kXkZ3BGl8e7M76IAOZIZdYbJo+CjwYJVnMdKSFrsNP2PzXiwSsHoYluYmCfiI10TXUb6SX3N9mLJpltRv52Kf+h7Pophvzdi/lmYWr81MaMcrMVg9x9ykTq4OKIw+x86L4u0QOTkPW5aqH8+C2EEI9utDbN0FwyYQvMF85AsytbgjGMBjWKfrCg5C3Lc02eJAErrZwUORiUjVgrnrClYxR7wY7omimfnpCrTpYIDjvn2hUpoqfL9SGJPtydOODnbjDBSRnEX6X0gAXnJ411bTvHXdz9qkzkVNOjCyXhtq9JDlifk8RQtY9n96Je8XDVv6EfMPZOXliw0/z1F4FpjwBQmEGZHlULsyPG4Qavsm+dKwm/fNMsJwCMVUvsKWFxDTjua5xg7lbuDDhbeZYu5KuAapU5/eErbfPTadZFAQ3ax66sS3k8MGbOJFRS/yFAAojIN8FQcNZoM2KDoOzFHeV7k/4KhtVliJ2si0DxYfIeTD/u1VYs2CGxkwWA/kstDHTqu204AxdJwU9dye11ew/wDD701UfDQ9mmlR0fufm4FNVN5Fsaq09Axa7H4cOuSJ00JJuo203sEI3zwRQqcWbyNx5y3d3ZO0OFAtuv2HFYiOgqsgCY1TkcxUQiL35XyyVJmCRfDtn0wbS/HIIDAcW0B9zmhOrV5/Dy7pGOkG0NnlYZwsydSj2bbHHGMaHAJ8gcJWexW1I7WVh5qL5BdR5/PS0rZ/9U94CcHLd4lKc+TiFd0nNCJbYgrkkBJFv+Ugl2/psM6nJfNsW7NPCJgkb0PnlwNbGT518bf2j0vTu4P2pUssTVO13hQpmbNcqhQd9a64b8t6YQygzJjtLCZNBkSj+UpnFwKe9A==';const _IH='bc9199505356dd44d10c974d0c6a3a711c226abbae878eb3dcaace0a567ea2f7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
