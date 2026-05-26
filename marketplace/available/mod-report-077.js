// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NN/C2izzfwOBd5gJnzQA/f8N4XRlCy3LNgfutyzU4ya8DJxdvXi//39n9mHusg4RDU21TuRNjFp9hlHP0gHRZh3QAAq8HE+otrftUv42EebXVMdFLDefO6/h0j4O+lC8Hl3GHdKd1QW9kMCOATyZmR5b8kS42YpCc16Mc9Ap7WwTDHPHtJ7NOb6VUQ5m+PMaVCAR48LCWJn7Qbl7hiKH3KibowX9j+vgRneKoSAgrbYV1bve0lRIdp+o8HhWO/GbWDYgdvtLXfXqKy/nO3Vb3CDcRKoiTznNeymeuyL2yEIOwZrnwCIWqaAX9K5e7A23bSAP707esPFUWUhOq0YEE7f7To0VrCMJiRw0B+J/gZK6q0jM3DcIaM9SvOF/o1Mk70eKubaA+JnK84SYSoJSbgn43k4o+yE7FBg/6KJyET+usLexCb3wcQjWrbpAu8si4umIClnwDQqF/fSMAabvXNHsvuzUnKivNLYaW/M2sqUMDoIk0qYsypzK36haW9L1+x08YAaFKYfdlo6jtRM5SkoW8Kdheij/43UnlVHeQVzSgjv0wYKZfK9v0I4DDNhEUEoJKGVAXPmFiJo/DE1fqP+9+/34lRUcq4LJrJGqBMiwX0oCgElNEy41OIZaPoZC5LL3nCsubyHw1of4kcsRc8Il24xNYlLTf5qRDAUrO0ouIK2nDEMF4YYiwfhNPt5YwEg/rhT9GtoVMwyqh9aaGFRi8Prq9ZZf+m+b9R6hVdA/VfbQ0alD9AbZ5ZtwUL6EptIyOlIRW7dDDIFMckBT5utEBPBoJpc5+rWM8ibCZXGatiIvj4nWwHiPk7XOBa81Rpbl5Te2IZPxEWloWCPJrkjknrkTzvlM8nk6B4lxr7DsB7zPFhHtEdIPapKMbK0UTn5gpcMYjSl/HM4kw3k6WAF0ogofrY+hY4YdlOZzQfXKFnCmfgusuWpd+yPeeF1SsaNieDHomKco1T5cR//TvOMKDro74nAdNd2ip53NUKXRd3RWyHxLvCBMLkWLI4omqlyquMqSQuvwxc0kbgt93uR9/InlQ7YuXBVhREcSbFFr8Ot/4V8za/nD9I4deT2gJNl3ZAl1meWZs4h6WZ+hTGy87VZxtTjX8QBGt6adUyiCpYXNZceO+RuUDj4UrMMwz6mbZrxoD7IG+M51zzh24W3XAgt/QI6hgf3MRWPxRnBmOty/WQc1vadIwQXeQCnLotTN4qoOpndgotItVzNLmJQq1vptvCwao7tHvOxij51/GNveapGGi72NsLoCGrf+SEkkCz9f9JWKNib4ViqybF0z3JJ38o6XPVF395HovsynksUSHTOvHe7r7Dk7yb36eZJcR0vulUL+jFtSYetIePfGyr3cXoDFyawOFfT9T2kq8EU=';const _IH='9454afbc630850c7711fd2dfe5eb85c9f47b15877115a87694be9f9b7ee7cfbb';let _src;

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
