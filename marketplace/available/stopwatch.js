// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTNXATEBB/rt0pItojNn77iqDCXnlzmSQdeLJABvpnq3ykQlUTST2J5haXXNFVnW4NreHgFv4AMuvPbBzu1nnrHOKMcDXGBkIf4eAwvwvN3rJyqai2BBrEDq5SN09qM+xBD4K3Ze4L9xi0Dte8Tu4anuRuLC5ToX3qrF8v7mDQAVlCN1dLYDZpXgh88aBm606nX7xFXbTlLqRCZLNsuTYPzwcOskpwHxSAqlxLIIMFc1U9C5g7YdxJ6OL9CG2DqqR8A0nRENlbdRsNpK1PigvhTV76v0R2XGnzZlrmPcQap3PtayxTyPZ8/1iyYudGpQRXWu12+nM3LQHqg9UHWHSw7JRwN9KUIXpcAZ/0HDYvf18kGNGN/PyzxAYAUXn/bgzI780eXMOKI95eCWLQ8vSgkTJmNzMEDwqqitBemEZE7KMd/Qk9+8tB+Q3M6H8qKTFkxk1/eje24OY3dwPhKMLaveD715q3PbLz7OLUCXbfTNqUHCUeUlMzf9AphlNyMHZS1JFgM0JVUtbYCMtTCVdtftQMw7nzqLcC9CkhxZMAVBhvmELatCT/If2PilJ4mfe3DyC59jaX+';const _IH='bea3e01547b230d936b015d5751f909ebc961009ba59fff823aa1c379d25d618';let _src;

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
