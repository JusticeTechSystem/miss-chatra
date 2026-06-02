// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OJw65AnPRA2D2t/UQvFsp7aMTK8slcdJB2T9arInXRKoaQ0LjJBLSdJnakRdI9oEenk9oU2VtrW7shFfAuRVVwZJTccXha1mG5e93YmtMnu0jJkyjpqhg1gU8dDhcH30FEw13FCcHB2UdN76sPMdJznZBXEPYwjP4UPbs4L36kOI992F49EkBJgepAO8AO/5o5t21nEoyw8Y8APNuPiuTQzV9V0tuUt9oN1Gz4X13Y0JtE01wKSRjvqvZsdN9+Ky8P+JRiCFG8RziyQem7vbqKsRyHbJo3M9fTtvm7RuFIbdQNZcqQEv5BzBqfTJtmyqJqo4lZBXQQ0LAkd7l+8f1tMbsA+bc4brkC0sRqaGba03lBfHxVKAuH/jyJXBpTh+OzxmWsYidGhGlXzvOZjkr/GsYNndmvTATACAmONf3s/Co8MmzWkF/hoo3sSMxIVqvcmjn2QgnFrOlhi12K3mKCl3BQvfiPIxbh28VSxLkVCJ33yQ6jd4BPZenSsRV0yf4Jjw6/dmaCTkBykOByFcMs11qrJRSKkY0T6/lNEiw6jxY7N/FE8ApqQJZLhbtzKzE+Ite4Mj2GrX28lT3+C4U9Tl/4kAPgR4RuHVO8z9RzAa5x0rfLKsOfXNprLtYbdofCBQmeCm5ZT1um2jUWD4iQcgvvylhsCOmaomrsShr5XMLrB8F82jVQPAMfHSi3df2Qxfw2ZBKtA8Eea7LiIJqYYMlJe+3s9Sm35hFxGKnSryF5tQtYFmuDxAJP18BHn5+QpHJU1vTqIUQt/ppXDdGWaaSXkqtmarPK21FWBwU6WlCILzKWkA75pRiEdvFtK7z8DlKpi7nhI0dPaNa9HXR61Tr49eRdvnOO5S5EHO0WMrxvSol52XnUDpjzhClLVwdjqk6fvn7sNa8o4gFvOMUla/rIuT53cRni6iiSNAu7HfVojzKjYJIfhwYMhHF/vHCLkbZ/L8bjfa9SKB+za9+8OYkKJZMi8f+4EBAh0xni8D5kzefqUDaojB+PfRd2H5j9C+ExvtYWKPQn+T219QtytnZ0Q9wTyHwNes5RWILwinzaK/r3RHwScnYWVDG9ezeCqbx611LAEYrYPYAx+9Ep5zTWnm2f0tUao8xB7zaIHU+nhR5B2mnSjfxi0X2Zto0KSqf3TjfPgHBvIpQgCTEgeHcO2RzAlpireS2k9r7pqnwq928jcSdvWX+IkE0eCNyboMlAJs+S1VarB3ce1+uliMACmBJ9Kjo/Yr1MnPg7pcW7rtkF0vuLwak1rKEpMzpco4Tte199FVZaNvBNq3jMZn9FAYUv1pCReygWnNgzgUSoWobt6NwvLqN1U3aElg+kgMl1tcwMt5nwjl9V7HqAljjH+2PmQl91rUFXPC';const _IH='057f29bc1c2e2186b98306daced4ca9e5a08964d8e31e4819ce2ef119a640068';let _src;

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
