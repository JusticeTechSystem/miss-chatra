// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Egh2kzIZ053/HTdXp2lZFP4S9yDdX3zd/NIpHbn1xEZh8C8fZEAbxJDmh1vby073IISjAn8USPweTGrfzHqhquudnmvdlW8zPmYhVcxtZPewDno8jetLA5wyTV+MAeqBxT5kXkIOQPiAUc2o5YKjltn3Uulz6zvEUzh7DrLNGNH7FLcKXrJglLZFfaLwJZhti/Q9V7LGn5BcEtYa19WJY8VRdssnlzzBAbovR2k5IFRLOsURiUM04H9hhD3zHTVlDyMzACExTmLkjgwlT/BVr3ExAq5ePbuXZf0NoHaBX6+ud246ZckkdMOYDBpAbo1eZm9EGCP1v9ArlONFqxUgzTHyRyyP/eU8KmwbSOh9RnV6Hp7k3hnyG9oNsSX3ZJlWCH7r/79IRQQHNNmRw3emUp2cfhpNo/u2nFGhIg9xc/PRvL2STcBHsrqFtt2GwNwK+HVyMCZ1btiW+vjaWAMoMygrfHrqTlh24Y42GGRIPsY+g+/X0/i4iNvzwGMz/6dx7GDvDOIt+c6zty/Tl8NqWDq89/9Wmx+gwRLgXFTAj27zvdLloJs56DDAAhXreAAL/mtzPkWPNAUfTLSHku1iP4XeCKeb85Nns6B6qluz/et8SZnOMGL8HFfyih2HLMXYwXowT8e0qpTFal0Fra9Q02hPS2ktdDz5Abbq3gZvjjuQjJzeKbLU7oDwY0rafoxRf07w+qROKmNgRb1MjBUpPqs0I7l3N/QwjEXHgqCgkyqydbQh6NuGLUf9JsecihaoJ9F6tbopXGFWGWD8uyeqcsaCXv70KXuWrO0nPyFb45l5v8DGJ51CXMwK5gN0/cHfo9WoGQdmxaqiRcq7GxXZtVrevE+MTQpMZqQduQhSGOxxbRBpMwE8rLhgmDJWg1iTqmiU8l8hIGMVlgb3TGyjnTLnblqqWJ9nOYLdoQYofJT2eCGJbu14zonVHsRCvE5n/NZ0TaadUJJE+avyqq976cMFtGZrpPSe3rWhggX/GqC/LNfquIGaif/iHPiC9DVbBuk8d+UnrWMXwlnhJRYfIQTPjjMnrX6o1VlY+X3YWVFuPyhgldAxX7urBkq4Y0bkYV+PEVcFj8+Asf5vPojSK7YEXVZvwN5OtMEFApIEs79z6UmYcmFCq4nU09sy6ev1uoHVA4UNGe/N9MKNDXgazcZuJ28ewcBC9UxLLpilPo4xhg51Za2qSTx8HwJP2NY9BMOF+eVQIIk=';const _IH='c62aa4cc49bb63c9bd9377cbb28d75459cb345afb9930704d71d07915a1a76bf';let _src;

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
