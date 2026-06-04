// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IpS7mPJKjYRZYGXOOKd6zXx0xqo8sn6vDlBmWPEpCsUOmMmVsRDSNR9iNfYbEO97WWYinRVkWK3f8F/vDoj3eCn92isnwtdE2JV7o9SJz5Z/R7cwZ3cjGhL6QJzgiiLo+yOVndp7a5ZoKljoeAifnl2XmgR9vOTcqTVPzgfbs9AML1BCiV+QMoFqIR2VZdpqisSEpU54Ahfu5Pt5KH9QpuagTQTjgH94e7qmATqB86TZxMdDiW4S/JNiJ9ROEDh1Mo/7G+CEoVr3TCUfOESyJKVz7TfPdm4PbBJEInnxUDpLYiU1833uLZmErRuMJwmBZQZfOEUSicf/XlAVNDfQ21ZQUpLgOyLwYNtNJjKz1ggOgPlyj3VeuK9iEdifAYkSMguLHU4iSA7CZQl1zxP8xCy9NwC5PxUvy3E0u+JKyem18pmdFh62mW5mLIsymEkWhenF9ZlADVSuV2YmptlX4M5E6B7lWQL8GM0ofY6nDsHrFgGjYMAilxbY01gKqANVVRepB7I8T2AsWSJHIaBdnGwPwzFTLareIrrr9tziyurC/hDKtuAM+ckXLMebAHO6zXee9Gab9JrcZ5XMxonp+SkR8eezolFabVF7ZtrorydTUejWArkEpLgNpp5to23TN0LkXJEJoBk4rQ4yGgQF4Kw9q2qSp2YG4FjDc7Oc1GsFKrMA5JKehBAQ4ZHSvfAs21iB2WMGSA5n408RRgzZo8b5h2SK87QLocIf+r/RWQzeTUqjL4/HcMINP5mys92/gQjdWYTUX6OQN37Fo07t7sImnWE7QSe1xfblk6syBkR3/TZPvlQEMHj/6+MrnR2B9ZjmgBex6QBo5YM7Bofz5fKrXmbuZXo/qQrCC1CplCQil5ngHGrsCdY7hRnf7rhkn4LL9KQP1OVdPg/WVTe2n5BydWLGMjkk4nb+aHelPoHuQKOeUPahmN+ER2UfwN1pdqjpt8qk2/hzpLoWzIHg3dTBnu/oYRGxrS6PSHACoSa5QFnttftBw0yjVWL+6OPSzA==';const _IH='fbefa1719e7edd8ec009330a04f8556cae8bd41ac38e7e19a85db12abf1c104d';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
