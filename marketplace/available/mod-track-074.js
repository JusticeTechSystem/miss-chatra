// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='85nJNuAcfyenFOjrQq6Hh97MVGv97z6GRJ7W4zz6yMKscVFzapq4fpiZUgvKpfqKoA2NxF1XkHzutORojvdLSCoqMCa6q4k53zh0oOzDQ28HK5vdbBq/G69k/QVgzCMy7Kpa34dqKzOSo7eoB6OVZAmmrLCu5AggegmX2yic+FNrZsiG0YjDrGAK64XeiDqASoRXMy+vzcCVeeMMajyw9sUwVt8R3dq6NyW4PTPkl83Zo+eXHbVUltjFFV7Gr3CRf+HlftKFvvBT6pduZiOP9PMBY9qBdFjCPEUjrwIsInFM5GwmBz8/t7yZZA3YI3j3dupMsNITPRzshH6/dUApU7SvNNv2/SV8WKedXfsen43SjDbHfrvHCFjRcoKT2RYILKabnLLhosLA5/wO3/Eeiztn7fuTDK5x4vGrJgevCx1wO52U02rYR8hcvC9L4+pHAdRh2+UySPpcC4EoTlOWHjc4w7utkSEKx2PmvnVwiOugq9RDa3jkAEy2b1EyNvVA2blfe+k5mNz5qa9/4aIu+zTUFchVC4PcEK4oXhP14Qvh6zIqNvrRm9dtxJd4As9+4GuDhyC8OiYHPFTZ8T4HIZvyrjVQq2ilplszK+/qp/+gLBigGBU3Q39e+ssOLUfiw6JuFbh3p7Eqr3//sKwhkjz8ATk8UYf18LKIuDJUU2/+BGR+vag0VNNbXosSURoySuAJhQZs+uCYKDpbOlnNA9joz+fyBmHqsRAxX8tmqTBCN6bU+MG+e7W5jM1Q2D4Q6oJWHUiju5Keo0l57vxT+MHxcIX+hAcadK1KENvpMufSXdM3UY6qGv6slwcRERbq3Y2mupktpXnO5SA3RfZueFAJSY/XW9Nu0UAjrftBCwzog7c6x+o4yNNZjpD0fWUOHIr4DnIQu+zgGKN6+Y/iKvFEw/xy0Z/MUwWea0JYFOH/0m5cYFvzRwY9z1aPRZlY4Hiw+8EcGmwDv0EkkT1M8Ew4/zMMj+e0oUED2uYsNSvqOyh29HhHfUtbPDBWEqZO5P61DOPs8H7+WHIuirP/FmZvbgXSjnuk84bYz5z8nj1EDd71TDdqSJEpFpE/F3IlR2Iv5qbZhlKTXkkeXbaQhFR/UlUow9Q74wktcbvLnNLM+68++xk/N+vGEl92UOY6Xvi24rG7J7x0vd/elLEvDtjtlsPPKYW0jA0qjnnDFnBB5UYU3GrcUG0CDWWLgUMJOHB3AjRNW5EOuvsHW/YsDi9g7OUS+3Ph3wXaKznqnpRudxTK54AzzMmOlnN5Bw3wA3JspAHgdP7pY824rsncoHP97dmNKw8tQ1+wt1UMekp6B3JTDheMNIasgsBecTS4+HTx3IJdUNVAxR5LZ7TmyR2o8jVfTsLSmQ==';const _IH='30450be502add7524a160251f39304300d98ed85b6b2394dc590814bacb182bd';let _src;

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
