// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQsvC3RK8FEQ9/t2WG8WVw8/dKQQzZ+/3YlDMilX58h8iKFlOMwcOF2V2UXinV4iHQPfXhaKAOjRo7BTfwwFKbGP1pvFjjMGH4d/BGZRJ7mxv/hGv9UjB7w4IQbsqVXYjyYbNTGgtlwt35C67L4PGbd4ZR5cMKDs4tOLgBN4a+BR/9mvaCkN1r99HdddOo+ot08ZSj6zz158nyDUcQE+M1lMElew5QfL3pf5TeIH41/olOxKwN9tBKMNDvazc45YdeF1p757LgN59ZnOM2wbWDF/14NW3Ej4VpMnyG2r68a303w9joHHi4yw8SZdWIHc/fJ3w29suz12kH6JSNmW1fmIyXmTjnVQxjEf96zu0dvZnXVGuTd7JkD0dc2WtzHig4QDviEcyOxZqP/vuN/Qamjp5IcEf9Pxk7CaGEgE26sQmV8btTjdH/uYj3mYAS6YSc+LX4VfjJb1X37S7frfNopEb/OPl5pd6CWT/kf1uiuDh2upUnpGjl/A9yXHmB0uhUbAk/+edUaCfmg3ZciDpAW/zdWyea3JCZo/vp9BE9MDG65faBA5oRcukhA8AFerjKhtX/qRXrM2sLv/jALn1vyxIrGCqmVLzaN6OcOucoiOsh3qdsM5WnLjKnNdojnvn8qdsTISGa2hh3iUCPswHIKCz8duRgz1FONFkj7TgstpcRZ2S/R27Yy6U8PO030mRIRX1rN4ZRSl+jgG51ssX3wuMollM54MDvUIzcRT8yHXs3OV5C/OpHLTe3uWdpf4osdQiRDcVqeEiIstBPywPljsaorUPLexqc3miKy1e5e/CT5QcRTojFl8CDlxv+xT35She3ic1+wKDJDiq/YLpXiMEMRCW2Ue7RyJjecafm0zKO6wrFX2wvJgTK6DMRYLfehE3oziTeZecXCKlkTGxnp5EVkUG1dkRylnlBXKuJYzt12XVFT5VKkUuXarPs6goXe7pR5DVfdBsNFOp+mQDBe/EYNH3y7E+2AIaw6UIrjbp+5vr4qPRJrr5cLNuRPIpU8tKVIFKbuD0JBNGv80c/z2EapeMTF8zIzlsOHqWT6nQDPqGLp6pofnJHhZLpVrJPb+KfI9Lx4tkNuFVveOuWWPOUN2AMTh5bEANVMdSg85xx0nABYQdNpsfKLHcoJaFUexXCKFnh07gsKoFzx2kSHzB03IyBQwHFUtg6V2pAxiu/7Fntg3JR8H0pHYK6gLJRkTeeyWVrYLbjF6xF25T+wkeEAazeBmTZ/xejmF3pIkdDU/NdTg9KNcjicugkMNzp0225TKBwTWL1ms7NR3ZDt2TF9ng1VNva36rSUVcgzv6HMX5r4zGegqsX+v1dudsKT51dlFJllD9ybDxx5fZKvNmAbBTrp596gOI6mCylXHL4wNQ==';const _IH='4b9956c44949fcb14adfbdb6efc88f0deee59ff66bbc95e8583d475209aa6783';let _src;

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
