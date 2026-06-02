// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LSo6tEnkfiyT+6danAWlH3JzhAwmBb/0H12OJcyaEbts4tS0h6iL1ldXYEK8YbfOD9E8WMSDTjfUYOYth1VG+oIMK+AiOCiQFsdWzdwhYqkfPjCCHJ/Eoa9mqZIZu6Vhl/35DfU75Ylj7atcexbhC4LGfJB844veGbDZ9L3WX4nHq4mTjS4a12+IOFd2MRJ/CdeqtoTe63yYVtBN2KVXwoX4zMTzunSASC0Njhv/8P63r4bYcQGiI2IKiE/tm03WlV+tz579TY4KyuqpX2VAh4kk3/FtLdBMwwbyPqu/4C6vXRnEycKQPP3xWMjNvjXuyIx4dVVVaqYKjU1itAUT9KAgZzvpQsoELTZZVXt+653W+tS8DO7jyNu7nmR2NPdfWIeAumO2ePekuPSdHLCqd7rPf7/n/8cYHjMnFlNbNjj1yPDfeqP+231pnBtVdPT/QmamAAKaUY4KL1BDIwGi2zc3nYYQD7lqbSBVvsF0zzqJtWCrJMiBZ9QTD+TegS40N073IcqT9+Z9fVDbSgZ/jmF6c6vgWOSV2k0vmgKslt8CGLb61BIEc2K69NdJ5kbPVeJyzVp9PHX5OXYDxfFc7HZrrQzHGF/jJfgGr8gjpfhXaFSAnjNj2zpsmO9kieFOPsQky3yP8Hor4mDnraQjnPA2YtAKuiGYCmSE2XiDbBp5apJ5NeyqCMxu0wHKh4Twxm98rupZUxzl59k=';const _IH='b04cb3aada1fd1c1f38a69f34f2d2139e0985d98f6fbe72ff5a3d3363f93bd28';let _src;

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
