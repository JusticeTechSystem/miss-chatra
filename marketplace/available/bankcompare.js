// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hOzoeK0UZp1z9rB1TOd2/ybu2gsgy6j0DwBfOqEOlRL6U2CQE+mrMqHAUhhQ73KxaPAC1V+j9e4g6dsJRfufCjunc54+wScCsSf009HoEXDsYLWSIb2dwNlvhjmwCcUILTRWBO6i82YKMF6eOhaop8W6lXEtLvdV37/kYxlS9MCZAAqgbBpgQpYejI2s+FPAGmDDJzLUaUwTgy4ftd5Cbdo+cZMvBmA0BRn+VBnbgALDLJVnDTKXIkn81M4aeYNJkEnGY1zslNzZpvdjEnPo22BL1pgzoL4s5UPBrUHE9gWyIf4NKi9AMPCcmVKmPZSykHhlL+islv/88i7KGhDe39drtyEf0DSzkY5k8QUEvObu6ijRUCKc5YWA7rF94pSFHb+q3xMcpNiZd2Eah8sJjXrxg77aYi8+pKkLWaisf02xg3ZOSRtfka5b87tuV2ao5AHPrxpPPranGhJpXRXWRj7o+dIjaKQ6fPD4RrNT3160yK+V6mBBBuWIiE4tM3n8maR5LCtYVpFhBaoenQ0AtEb3lMPu5dCU8QIeQ6MBNsocuERhldtqo3oeavcmbL07zjT9J94DW0rsQoSqnizbS2enjXF2B/QYfsFStXdYH3FbaiYq84Dkd/T1EUrG1Xmi2vcH6GNtRvoZlmpS3Ke4ws66N2WjElTJ8cqjBHxrLR55dY+7CEAsFMF3Sd0KUq1StFoBktrzqNeptGTAWBrJtEwdXi2jrTkWWwj/1BDK7yJZYqi9SAbySuxa3J+fa/xas4Xqb3wUy75iA23Ouad5KCn1oOPZ/T6iyfJJEtXvI5qFO9eXo+d9vnBDPdUBHT29mBdN3cO/x9M/3KPMoRWLEdwkeLQsU8npoaRxTFYHSlv0pv2JLSyZWlqBMVxa7tBhMuDAdt+KJFDpC9TfnUrlq88teP0Os3VuL9aQSpwCP0M/fjnhPhB8Z0eauj20NCidC2XKSH4MB99xAGGZv7D52t6Ove1fDoJKwJNEmCZo1x8/1owo9mreQnoUgE0uKJuW1RJ7ElgxJOgH3/78n/0fICD+yx4RxDMk5Kvn7fpZbRmE0G1v17QKSNdX5jaEcHNSrzvilMgraUdC77eeh03957gUuv/yFksjaEG6KBHHGdBdp6xjblpTta+y8VFVLI4IgBVN4OZ3e8DqJ+gqs7sW7J5RxkTtvm86jGrSDHA18Jy5PQprYgkDGDpY7qScdOEbgF8AtGU=';const _IH='bd0323bf3c4fbb048821b43bd4a95d53fb33f5936e89094a4fdf3c16f8f3e3ac';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
