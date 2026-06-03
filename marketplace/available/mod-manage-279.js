// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mSu+7K5S1LPGSNjBo9H2unaKl2+o/KpQfqTbQExFua2Kribe7/wdZE16pCxRuF/9X+97VtkblD5MG42rNs0YJTjRIH+QequKZrciUqGpf5p3arZjCG/OaId9AjluT5rViRBa8dzd1HOz1tP3EfHDfQMx+MV65a+IwvalZ3St5EvoDuhHPW8qsSJJAHAMPADXlvgmiDmD+1MfnrY+xk0hCS1wFlApGhEYea0lIL4uR1altqJi3tJtfINtSdBnB4PJ3g7nFdlYEDG1gfAPll3wX/LUW2WXZ99LdmYj1R2s1DxNV51NpT3I4j7OumhIxn+3pSDceWDmFL1PCHrKCNrWYYBjQ5fPjR92ArjUSSW1DAIfzYAoLEBeXPdfQGRvZd+zijLzGHaN+QB/H2sRPJkpa/unVEN78hLuB37BOcDtgF9AcdZheIsUeIiXRdvPYJ8KzeI6QKElQdG7tp0g/Qs0GlIJ6Yy+NLY+CkrJOqFwv/ae/fWBdcY5KV3SCILoovmP4IkFJYG966pva7XtKUVqc6Qx5qXGirTHVG9VX0OPI2QHICbFxBX3GixIlUpPmeyZccBdB5ZbbTFlfVF9BLlJxJ+pGpeuduTZu+8um+0Duj9FTpdEaP/fQKADux7xhpaIXRbpKeKlWGywZmEIe1xNxuyqejOFZPAff2PsYIn497SdDf30Gj4KklkWOzApDqx3Lu3f+j5A1CHMifB7xbVOulZjk/CiEEineiN56dBjQknJsjZ0GU+DOnW3gj3AtiXpkbNjq+VLC1lB5sQa48ZxzmGp6zpfu+WysLjHSGNrPryskYx+MoupjLH9iTsLnN2afP0ulctstuFBszZ/9KD3J+UM7PUvxVUDqjW04tBFnz3HEBs8Yh87qgr3a/6djbWd4mrQouHFOLEvdlkb+IN48yWqbyWS+YJfNjUZC04YWdyZYsydqVN4dk2UXJ9/pkwcnlFfZvg708yTLAzyJptW1zk1Obj2waR69quWh9196A4srVysTHUirkmFaJCDU/wdvPu/pWcTjbp+59uu2Kmg71zF2Kxf3j5IcDsLTGwbx3PxXe1zh8Vv0xj0qFRMvle1qRYFFhRj5l5SP7E0EsswlTaFukz8Wq+rNQ2UJc67nDM3VOVjvQmKdggOnmLTSTxIzOQQVOA/SccVX2vByqr/7bXPY2Kt7bo8UZRNfnb1wUZENgzvJ0aIf0qNgrzyMe9dj+rxF7tVEBYMr0uUnivqSfKFUCLIiyHfOS4I//5oXI24SIOBY23750VKwLWIZDIADVgsGnwtGTwWMjglqoLuh+mqV5THr9Xp5AyHMKhcIOfvrUHaRTknVqrNJdg9m3QD8Miu+jRpD+WSIxNgKgwRlGTkP4/DYSzhoLrZE17uNA+NMCycTNwGpg==';const _IH='6aa00ec6527b4027b587d676ad7a3daa6b12f92a14f38df33e64c99646d67868';let _src;

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
