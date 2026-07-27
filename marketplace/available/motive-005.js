// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRD25qYVyGYw3RpFqItz21c5cfgjVLtmKdmD4yG1nogvpe/gxGzEFmldobfbSfxHxFAcMRdX82nciA4a6EfAbp71a7PwfiGD2/Dr4yAq4U8zCh1o0Uij8x4TxH+5iPcYkxvcgrtntszomdIow7v91VUCpnlp83wkOluh3R/CO4eE65sRGfXFQL2N4mX2ro7gEmeCdsGIUHLZFIswU9zjceqFwxdelq+A/jY1hEtCDtEc/vn4P5wq++zSIJINiIf8qhOf2csOjgPqkWD45Sgf1WRhEifITLtMnlXpwcSJiYRFOlA1PYuPNREafLrNi2b0d0jNQlgVGF2Trm9EVUJ1pNC7kdAExuGtncHo1Wk3pOv+/Uf/TnKiqy7ibDp+X1eFZzhCM+JjY43NbgVb9Ikrbr/aAn/+Y2BNMxtFkmKdUzC3vd2DBQ23wD07+G5m5mlHbFuVPzcjz5uuI4AY/RIH0GmKEIFawYTdWDGAJXLxiq8ez9yiyx7ZTzyaM4NaScIZuy3X27hNmKUXolkZFMNBZ+6z4Z5BwE4PiToSciZNEUvesmuqkgqZqKR0lBDxRtAgpMxXX/cn1fqM71S8SV5xFzk00Q5NvYlUORt47W3+L8Nv3X1u7ermxSqiAyV29Rv43/y/+CIzcZZiVusjriFTG/hnmjFSi407vgX2JBK0LNmNn/fG1EBZ4wplh4yirwSRqKf0QomlW1Hx6kp0eH6y7Q/ryM+QkP0i/YOqPDDTfWKGn1BVTHssjDRJmUqpOJD4evowcxskwLUwgEvA+p6RYaOnnFmyQiNV471NN6KH1vXPkvua+fsJWjsragldOC8RZn3YRmlg/KWJqKva1XHo1XguY/8lt9nB2GXFQmtlVAkxQoHiN7CKOHkvay/HIfF27FOI0qCOGkJleGkwfZT0FSNQYoSlB/AjssJb+VuAlRiFYIQf4A3zHX8fuiLqn0rHEPnb9LlyKMWfxPkPz9kgJW19oxRB9mnVALCNlyZbLoI4Agi/HPmvGczq/ppVYQmaBRJLMGDzescRvcz7poe/w==';const _IH='430efc18c6308f475fc6aac62e6cc66595a42a8da631c0adf09f4562036bbb9e';let _src;

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
