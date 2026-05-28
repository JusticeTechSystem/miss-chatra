// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NnvI4kVzW2a5i1yMwZWbkjqvwLFciu7alUvtqMxaWn2sgaO1cR92BZBbTsuQLouLQvb1EZcKiEH4RsMtmwkSyDGi0FpkDCefQWWre6hffTva/tpEBCLDvgDxf3Bg1Z3Y7M6OYTUDNaCpwbVE5vsYvEO5psA13IYVoi4LrOYgEQCD++lAoDaxTE9gWCU4VDDT41F4TUbv5MdQlZuYA7aD1qnbx460HAu23K7x2D71JAz+uzz0quF4XQSdiZEbt53A7YXuaUHfIeI8YRZ4ePp6KnzOteU2kMAUk91jrjjaTtfHri4abS6wnD/b1oYqMJljEV7egwcJQbhAoW97TQatxvTSLeJi/3ZBftjKYJDZhCEgZa0OdNfLIowQTH+cFyNBCK7lW9lcAcI8MY0raYiwabpo8KsMcRgID0QtGGlLwl/hdxdaBgEEZj2VxRR5Ug6GrSUW0cOZbx33LZJ2nhXACtF6yWgS27Ju8qRNJWfbqPwVBmimbqrVxXf+pnvhI5ClTbFuNXK9CVCd33a4hScf/k3NY7nJ2HRwBNmu2RrcWH/9mKXoLD06reE1xQH+8y2SxbDFbWfsAOcLOpIlrzTgkfFec5VsAQ/m6lozN0citTKEN77HfdvF5fzhhTK/qlpNmX3+DH49AYLFuyTR0FGQVR5hQ4g7f5vlIJs3jD0BnVGiaRc8YmO2k0K6uSApPltoXkZSpJcQrcwKKpTzcZVd3F/iSh0hhxDXkikCmN7wpD+8A9NLuXJ9sunYZxoftC0CU+QsV9Be5QqOqiJ3thOcDVoe43hsrqCjqVhtvqXlrvokZYcijD8r64QMgfqXghFQFSWhKjcN6tPPnps/8621XoicuvYENQaFlZSmQ1PeDTaqU5NTaDtDfEkCKv3nJUz2Hp2pUqDrPve3kkrM71ovCcfA7JPE6Ojg9Yr9L7/3vKqPVOoAmz7R7Gz2Z/cjvFjaIHiGSarWPrFiNJYLIQpdfAuO+9D0wotXDpErXvIEO18GvdX2iAbWHrZ74lm9KVUInJRPGvP05dtQpOQEpsoUB0tIix0TLUkvErhERNADMQ1IMsOxzOR8dx7pOkFkBkQJvN6xlAoI4+3VmdvLIky/EV7XMt1/67QUcY4Kxy9Hxfxiqt6hEQiycBVhQstv8xkhXNct6/C31pSKx/hCYneQn3aTDQjwcU2DfFrJ8IM8KLynZ5vWJnaaXrNbQhKMagXQIAuN85CL9uc=';const _IH='d4594ded6f18fd8b6924611a9c7c553d85a15125b55672aa5216796bd3044839';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
