// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='L6GiWfpSTFO/kfVuFwtrGW6WVi9DMl4UvyplHr8dGYGlr4Ib98JqiNYynb/WU/7aghBA95QeofeiqtOi2+Pd3YVhZ1P+j/MxvYaY2GnbYpdiD6wDvGXgoYLNcJpgHVupjV91voxbui63sUSXOcXlmsmtKVQFt8pWQ93/q3RTgj3Q1NjitTRCOc41QHAwxHBEPT0u/pDgxdQQI9G9wf2RBCXIy9J+lMt1L2pIye+6Vq/sh4Pr3rOKrOHwuTNFYJA4aVB9N157IysE+7D0cVUwhLROmGcN2QiWmuvW2Xt6URCzOwET2sgCs6g2K7DIc/z2UNb86K8mhdVfrAfbw1iLOHbmxwSDG9tx75XgKtOSHufgewIA+gFU//t2fyt2mev9Histdd5oSNUok8V4qzCo9NOd1dXHKSbHYJiS+Ii4zh0YKIsgrd218O/bPWNCK4FF7UQkIt9N+DZZYnjZVhcgBfiM3Cpplft3fyZ9ENovineE9yVdAV9TJQezUgSzTqucL2q4vgkTDX7yVuzTvZ47HtjsuAqsmxvBwrY5R7lyOT4ZCWMLNJD1fi+isa1K4rKenrHfQyY1g/cr73bpYd3lt4vHFC2NUjwDh5/OGs9A/qQfw/25MOib+MyYP5k+8BsjjpuA0BKZSPpkn6O31OOA5E6v4tx9dYdQqHWuoLWErWqI8a+LK1R9tIAj46Kl3fqLCkylnzKJsvXeOpsnW62Qahz4gFUCPVC8qujGFxa3ARnJpIwCndf2YV4qHFEdMf8HUKwUdQCZgYz/inE9H2grRQf/ZhkiDVDrxHMvRCggnnWZPaSeLw6PQF9Fho0vIMQo25x5bGGg57S2a44OmBSyzP2ah4MXg46s9Da/esSSsQ81dOpfAtXeI3X9iuzfyUP1VyLpa4xUJIcESVHRBJ71gncYwMIBUX0cDjN5XLopj3xEHLwo2ImPvXQHA+VyO3BVNvVxMtxpOETzbasiFXo16/dDW0YhAnwtXYwH/v5RQA80YFl0kPybwqWcaPX0P/U3zvsDK9uNUu/d7CUF8CkLi+/jBkpmsdMn05Omvi3Rb7CtOIHDUngIqTYNJxaR+bSBNzFm8yen7+LF36JfntEFh17fdIg+YGWEIMLf/dQTgmbNg+fC6rDCRwY/bddtGB0csE+kCwmXK83h6NNKWp7MDBJz1Gxb80P3flFodyw3Meh4vUjrPAx35DTSDMatUHm0v4OYONtG0mV1K/kzbidc2/8iJOnZErmGrsYlq/QdVyNj3DT1qZDK0Sp2e1ETaC3cJVq5tcteX4TSzYchIvO1GecerZr7LNEmJj4CkXssovpCQGjoqmqemfWRn/IajgsyWggmIZp9zxj2K3GFnhiIFpxL2qyORpzt3fs3amYc';const _IH='11b9459c55a99bcb58c4d028854725a7f21282c8d79bcc2622922a7c10df0c76';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
