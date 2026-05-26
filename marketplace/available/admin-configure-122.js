// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QXSMyVYhVQ7MTTvJAfhtnUSTI/a7tVeY9gQMavkH50pHxAs3hHjKIZ0rOCI0pt08Pf8vbofp+8fVMSLHF889j/Bj6EDK4w4lz8aqphFTSl4BbTsdox+lqQkJDW3n++tx1CsnLQmLm38pCHfafdvQZsjoxewvHua3AY5c6dt1GmS04N0NVq3yokOUT0GPrtxkpt84vIuo5YU0AJfa7px5lNfzjvXiRzLZIjZxsjAWm139Nvy5AVIfyUak7mMFwNEbvKzkbrNDLBua7Mp5ETWObLJr25ibV/A+eUzWlMaJ5pBQWx5j3138KmSth3IUjTY8yJmgoLqhMO6CA9GuqFH6o9s3Vpzym8Eyx9j5eFfyeqkqbn/zu9JwPUoNG9u6PNpcrG8xBBjACKms9j2uWE2lMGQ1A4oNHXxhIIz9htnbI724DSMmPH42pbOZMda4WvYaBuXebp/RhwusHwxSbs8Yl3frDrbs3eRjDCYzEHxduNWjYuKEtWK9JvmkqOpVoHYtXWjSAhvq0HZVl/1Byx0P65c6oT865+7nVk1RJlWlbppuM9G2idV/wh/azITyyhUlo6Qw4hexR0Uzn+7jljmyg/Jy8rGZKb3t9MVITtvjkNVmAqI0oZtnHcGw3x8FbuBxnkppP1TPiRtZNqBu5J7YM2nXtshVMksqdAt8sbZoMMi6WneAEhzxbqwzXkytqJmjniblSFMy2sdlrqIW6kImH+EyrEm93UNtAMj5YTGzuM1mc/95OjQydUL1i3143GoZmKtclsvyzb4kfpcHvtuSviJjaHWrHZaGcBhJ+OjBQDzDaNMDKXs+8AyKzXfbRVxuP7IQZuYAKblBYmQUc7cdunHARsJC5ZcUYyp6j2ihaNknIc9/RW60/CKGWPrS0zfJc4G9OVausy5xH+0HsgXJMQYsG/kSNHybR/7UYalxBMwjayLaoBLBAlRRZodnsKC4m/BX1q+0770uKcNlk8XbBoBGp5rgERGlfX126AyJdORGtw/zQw2sJhZrabfzmf1WiNybdjfjWJ8bmhnRcsziF+SxHxp1lA==';const _IH='d3cf18ca543c0c60e89c1c6404b6aeeecc9b7ef682b0b570ba9af1d56eb6fb82';let _src;

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
