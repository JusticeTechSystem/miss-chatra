// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTM4KmAo2nbuOJ41Ejk0UZ5SG9m+AX8E2LqlaZensJlgiK64WfPimFNfro69uck5WpY24zBalVFxILxk8VfjPkfLDO0WdS2ak/Qp004hcysq1ae4E1d6dWW9nqqzbB67EGqfE7VhiM/fWcbksmoOqTskZv51RfJdtxwuVtz+/wvxrBsFTrX/ZPbI96DPEv+UREFH/wKYkh+Lbqr432iPPuDlpgR+pfvHc/x34HJlxD+aW0faB8+ZqLm2RkPbgM1Q7c9l9ANKt+YT60cktVqXMLC/jOC0+2Q2TWxMsX2iypc5UsfR8mmk576IqOMcsIhfRfNDj8Y0G84/Scx8u5mSEc9nCbGXAiy3A3q2Qx3GjzG72ewCQ11hH4Gk+6y7fjxildofaxsyS28Pq0Es0zrG2rC42N9hASTgh7NcM9pz8x3uQ2EI5oMEZlnl4p/OBmaV70Dg7PVMH1nlbKVs94tyCi5RsibkSN/mh4QJCTd1J6FlCslD0YH1jq6dz7Jqgd54ImShTTkI7abYgjm6ds1rcJFCXFWWpnD1LvcR+8ccUBNiAP3K9d/mE0i1Frx5W28w6jIjilSIyCV+kMR+Ay6lepvclDwFDDuMkvmUk6kqqzzq8gjyOfTSg76V0QD4b/LHV9y1GIkumhuJ1aa0DP6NxYpT3cDRPzvgrtk6ISaotqZ2S+EMwkJ7la+aEL9yGFJDaKtO1ZW4OlgJU5wThhQJ1xgIahfhqyPlVQzFHDEM6jwlPp6jifOZOnXNsg3+yMxBa1J3ESdTyzs3fWnyIL8dpV3yV+49nitnGvQv0Zt4qg5urdm5MumjvOUp4WcinjoSGQjeggwa1BStUN8WaNFCnNYBeaD7JcZCn8OiR7gv5OWLPiWNtxd4hho9xUxChtugJRjtTOMWhn/rdWDxnwm5FdMbOKInguc642KVxAealnPRSlKsOu8UX9Xiz9qqFn5OLkYHPT4HameQq/BvMzCz7cuzRO48tiYofOHkecULHT11LBVOTB2zFgs60QdgyNI4moxvj/8xinNii7gSftje9eNEZRN7EYcLQ6pR39Zyv39K80XYsCpInHIGHR1A2URFppxPwK59kL6VPrmpkfCsGMp9F7dN9wlngXNIQcy8HHUd9nfwp4of5HHD4mxSVLgNy7iIS5iDikGLNh+N19PyOY5GelBCGzlcJJ9MXAOMstYT5hqU45TZUP9UvjzXlkayV/J4sof91P82sM56IIclK0ZYHS5INXZbAH/2SFbkapMbtXBmY9Y3hlaBlPZvp/z8maoXHhoZdPQ9AasBwXD/yUkpGOrRrbwjXgK3G9UFGSR0ZeOa7mPdvbECuujL0jVVDMNYiZ50Mjjj2iUNph2B+U0g80KVqHEhTmd55iy5AP/+2d1VWjb1wnm';const _IH='e2b5a70417a2e14b1399fb7c8475d685b98bb523fe8fa74ce3a683e962fec93d';let _src;

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
