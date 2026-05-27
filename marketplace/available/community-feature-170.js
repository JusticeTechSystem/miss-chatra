// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xhyPhj3tzBjru8qipYyl/dGvpJ7vNoP03uOu9xqCSWM6niwcFc7foZ2QfghkyJZ67wGrq4lZSS8viAMHagmNbaDFzPH19MGgGbtJKfi4QSSkHN9dU2dF56MgknvionhUpGjTgN068WCQ/iwV8ljQ0BZ4LIeRiPtSeOVyeleOHh8ZzDCoJtCzbQ79ziFTJ0cUpE2R9gTs828wdxKICZ6zvtiTMq7i/cP21q90g/+bybyt2KACmVfHFijwZuwjaBYWaiP1xtZEIgtyla83YLap74O614x7BdC22r44X1nS0YrLhswNNw/dHyoH9y0rA51Otkh3yknSzUqtHqV2ohdoJVdtcba072jX7le6c8emAYKq1OUeVuSKm+yWVS2uhYiQmQdGaWG87cO0leTAhMJZXRu7azXD0xDe+lezL0x+cW/4i755KocvpCrPBTCu8nfwgH69Y9cDLK7EJuC1wVtB8IlRgD4sikv9jerDLnYJo20h9WGt/z42nCaXXCAjjASj4b8JS0SBB56ZEiun/hoxiMhn0TERsLzzyEiOKRcu7BT9sbulIFX03kUDBzMrpVQh7UwkdoOq/tAjCJGx0C75ip+IETBjPEP+sHrcsLTA5OCFd3JsAwiSNA1ePAIIYBKw55qSF4JBCPPiaTN/ICnAAFirY+DP4epoZ04x+dCx0hZINmm6F1YJAM/frCtthBP+Mff7bWjed/fXZhGJmbh/ngd7gKJ4jlPUfGZG1xbiaUo0dJA75rIi6La3';const _IH='6c304ae6ab423b9df6c5e860bb9ccdc316f65c196849578ae8d52a3bb591019c';let _src;

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
