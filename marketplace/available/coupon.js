// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I75WKoQEpfF0gRkDk7PQrEabJZq/hDSA7P8r/aUgTCjzGHfRiq+VemVu2Vviwx52XK6W5KpiVa+K4lrmRISSfP2ZALpLSudTL22tp8Y3Txs5Foa83cEURxqJZl8d+o5RlGn++Cku5ll4z7w7pIy/s7IGMfTkOgnH77P7Agm6zyjOvzDVeCMQrYF6Nu2QK6sUsNkOLim+7qV3KH+m8Ce7HVDKYLeBNPZ5jW0WTJb2048FtxkeKEcvJ8nTFgh/EWamtB+nlLZs8cwh4lhyWWdrwUxcGIFOyGKhPMCHTGt8zPAba2Ir7vvVROoQtIyQuqNlTetnFpoMouMjDhtN1r3VHgWupRoAlZd6wofgzW4YiRIpKIS+ODWbGb0Hm/IDrEWPc6fFSeXCeVM0fRkevk0BsAr8A0yXdk6XMQfcMaSTLJWClcx/uulUrJe0hKct3UfdegrsDazDkGnzU/y/3rtioaEe+uBqJc15RwEluFTNvsnmhWVppXTEVUQNjE0Qmk3UsWiQ3/plckDmLAZ6AZdOWzPoIGKxtUj1/bhJIB7k7kg48YFRdbCG8Hvy7HlNmNrYXe/7itDeIre44ySWs+0HsuSoiWfYqHu9cLZkNMe+1F/J8v5MwRYoVwuvRPf9Xj8G8rRIyA7V0iV6jnTT+eWxwNz2f5ovPW3efybyyMbxlJXVO1GDZesa6lxcKLSTIQDtr05/hROSbiNxTGOckiaXYd35mUcVmEbnNRNlEEwYXQ7UxwuMbciRAJgm3B2hiS7pyDUHDQTPKZJIuhA7EwCH0IULzUviyHfXxJYKWoZxBbxB6OPFiZC5riu3ryh4wX42p0LLUerFFEGtzXtji4rKZEp7nwDliv/nvD+bf5t+oQXbuDK1xsohUwN8Yhr7myH2WHCLEQ66Wzmv5ztmYwQ8TW64TTSqRQwm267+txSv1mxoCdFQbBslqoTiAAEtQ8ODLLrGIjdjGICPb4Foxe5bu1pq2QJth1mFcoO5sTvFJmbBZfCNMJb+W8Ew19knuZjnW2dTn+uRoFaY0bYisdOSllZ7+qsNFPKhlVi2ImCpUgqkDpQcXfym/usZ298sPLFlbok8agWo3TC6Lg7K2WKvTlxDUt9YsWjKwOReLXZB7UVHbgEyVkghdWB2k9NPOClQwUHoi6oh/O1EqZHkRvFbLQ/4c+okJlOhz6p9wExMCCgAbJopnAomgQda';const _IH='c5ca836d94310bf153cd8edd4aa965f13a3602264bb7114a3cf4e267d04ef016';let _src;

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
