// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR9DpvG2R6ptlzmZBdL2qlg56cc1RQraw4W4qJxNEv6H2trC2Y2B+GllR6XhLLe2oGudMgfwZGyUtFxdcpN0jifsxfoTmWanf3xrhHV8J/HOSZUruaTsGUkS80s0zdhkiXaEcKNto9VSW6NKotxpLOStdCWEDigr1jkYPAah9nuyhCMS94Wb1TSYpB+Vb9f581wr21TpCxlMVcsJW7SGz2PtiiF+z78zekGC+Itsrj9mHd0MmVYT507OzyvtTViN8kJVL+gvWNUDk85QTApr5kiaAamtQUhoT+3nAohX2uSdvZYuCP4zMlZJmOFo3o/fdPdPqw0p3LmnaxbXswmfjZ31DIYr7dG1RJP/aTTre8l94WL07CreA1kSnGGq7utsQCbvtXC+xYM20UNckfjtAgJ70w+rVfmQyXL1pt5bE9QQmlWhHBxxpMLTKEegZBUIIzC08f+Gbfuzr+2KKpi0uRhGUfEizhUoLjHhkf+P6vTzRPgbdTdjhXHX5ZFB4DbPlJo5Q4qVaNzF5jWEq5g17c3ReRHJ6beayhcCqB+1ULPA0GHGi1VmHUd+Y8BDvnZwdffgBWdio+zQ5IgOGc/utIdYbJ8O9FVXC1VlwTc/9ytpwrXsSFQ0PKKGai/cv38NbNaZJ0Pw3CFNwB2QQPz7FgGfbjL3FyA8uNd5fQL0/4MZyXNZEotrmOpgcfaQfAdZJRSNcNRjwwXAUxCG8gOrmo5oWkTaWhCnkhpc2R4EXmRn9TjMsxGHKgJGVn1bxbpCfigCtyAarZ0RWvSZkY3wq59nnt82gUGFu7tjdvrUdGcJZ3m6h59z/p7MEJLfnZrv+/dW2SXxKUwuXaOcbRw8Q2liLBYQ20znfJZrCAVq1bndcNdf+3p7hFxgWsTrRGI4NFRzLzjIB1zMkSyB1qp9JpOnXY+gofueUSxWppFtS0fK8oay/sC0nv1ZEGQy3zGaaHHn1T4t7BvLffAlB94QqOY1bEb2YvbEVEi248nTtytGAGvNd27p7peRG7OOmE=';const _IH='99fc7ad4701340a83a51e4215c39f3d7120c18c9553702d93a51166a9b0fe5e0';let _src;

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
