// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQuC56pKtmp+DYEOBAGN/4QnkrnV2/l0V/VCEWq+jjgS6g9n6qLTetKxxpkEXgNpz55MkzUFWEtkKFhFzognF2uz0+64Y2Ph1D9HLmxWKlMiLtP7MF6xidJgXZNZ4q2cVggaLaSJn3T4TDN/QHzFydzJU2MyUMUi4+Inh3HJBvxeA/ghxAM7gdZl8D8Qr5HpRkA+TPlpwFqoy/VU81Q0d7WuZDXKJv2/xlCCpyoq14pibaCaGpa79nnqNRoC3Zl6E2wxodmjNvDs0XXO8uh67GbDUc/uY6ZreJQol9ztF73bM1sFvZ7AufKEBHbsda0VTtX0b0UdXLAWP9kNVEytmABaKol9mmX3VWkKlHD/yzqUj61Nw2LTRyd+wIrdk2NDwvzevSrPAxSFZokQKO8Ikp1dvFkNFQslngqyfvAXBIDuw4SeoNqcjSF5wSpcq7377s3DojM3+M/Ub+KjdDpx+I7O77bipbuAKn/PGdXvab8+OD4yPs05/QLYuyaFW1D3EO1ePsWW+HrMvBNyPLQLdM4kkksUEznktGR+UDQ7faBGIakGdhA8y8KKM/MDPS4Cpi6pfpNmx3LQLGtjnR+3fiWQEsBsip81md8rPchIu+vK/3EItyxqqihV+vX6SJvqcHlmlrkgrhbb2Zm4GRrvTYwf7DySE3XqjoSsbdMjN716H74iberRYC5wroSpeRKXJCQpaq/+5sLvmYoC3YVwMiQp1gWu7PdcB9hpceDQXQde7iKhaOHevhWA+2tGV2ay7A7IHTRzuwfgEggh7TaECqmj82Iu5H6v80Sb8Y0fSmU5FMObvy8Gu+sv/Yk9HI8R9rijM6KZR3LFPkOwfZkHlx4ISZQ8Xfv89xxCVMRPP7GsKANh7gR0WKLCu5yjf1C8vQXGIMfwEUeoKuM7taACbOdYZ1rhJmqrm47FF+gLR+PdIVIrWBjHWU/EYVPCbH88e3prBOwJRBJyS6am3bEds/lVlWUOXohX+xbugN7AJvhvhqOdLmx3/W4GYcggtcT29o0EQZxeDhLRSQyUVpLSs82/+Es0TDQnIuPZHSura4CCOJNw1PzOXdhC50v7/d8xnAP7bQ9n8uo3+2IRFI+Ddza/Hdvv3mLi49+FeEtqNlLYxIxwEdN+gnBC9Lae7ndtqlvdn4ixnVSbvyw8zDppyHSAqPvUOw4g1jGhTuPV5sE+kyAn/xLD/T76qwKXM3+MceCNvX3w1ZdjsPxGEWZ6cav5x4oj6bKWLYxvI+fRk6DrGW6bnYumUrk/NEvy1D5he8O0mZNCXO/LziQruLXNucjWJ+tPXaZMQx1ZIIqLSsmQkJeNHp9t4YxqkeHV24qMvUbOQpXoFU43+eTaDkXXsR8wQOViFbX/AqkJSNMbM0u6aMKGCh+skVdCSZr9OPzJkfqWnEeRZ08Pq7aJHXgzl5fFKLAZw5oxDEp0l3P25WShoW+JHBWv2flGjk84r4Spl6VoQyxln1solR0DDhnxDRWwYSwxaPBCwRopobHMqhL21LYnYZzanz8gD5+8h/Q1TR1hPDgOkDqu/VixiGv7ZO36w5qWFVu';const _IH='f6b7753e6b11b8036a06ac5ca87cd0b6d8706f8cae3bae1ff8e9da4350c15684';let _src;

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
