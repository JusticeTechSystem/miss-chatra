// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qfM1UhH4ZKk+c2gLzKRo9j3+Rb8XVMXl/31YB8vueSjKikHMsGAwjwwVIRqe8l5mYFvo8UKbH21GlYwDP5CncJ6x6UekaQbgyXbZehrbRPkuiQoHTB1FcKQAqMT9Y9WRARmF2zBtWi+s2bSeiV6uVgLAxs2WKEM2qpsS48k1/85PyNnIo1+hduTb++fROh5hkqjyaAsN9iq0OShy6Irk5Yk+eKVSG9KxGm9ilo2CYH3HvALrd/FWa2gkP9mgkLIJ+al5qdl2YfnOon4HlDFuMMkwhRUQyqGHLzmO6Ag7sJIV437U9TBZdaNmoGEK5ieUcDwZg1sYwIj9eFpfgiUfNtNT2a1hXo4v8j/dvdZl194MxovwXIooVXyQMWuDKkEkYZXGbqA5Z+0QGHXH8aT/n+0rl+REIVFG0AisYfVsh5xk5ND+JoQg9i4SDCl09l2yAmU+4VNTfK9oExvDi+dvJUgwy6o4Yxf8LkIcbdRyhE45SeaartExnMTDiO6CRQCizqyl7zDWIjV+j/c5dsTgQ7yCSXxQEKhQmjXyx2Ex3RpKH5UTUweEw767T54IYlhcrLmNogRUOo9x4BQayUfqjb+1Ew99EI6MzUSw8+ByNIg+XgPGXRtBwsZMFXqVAqs/Wu+QjyQLDuqw7ezLTlb2LSV62QDtGSz+rzlXcgL1sujKZTk4CUVubd4BIYp+QV5u+NFtFs8yZI9tPnqDj8ZIhIIZTYdlS+Zw05pxGzMxcvtGQH7Bkhw8pTEWm2OoOOzFo8WxtpU/2Alzz27tXJMZ7vaXGpjhWBbOtDjlazI94TnSXHqDxwqwzfktyFy+CTl2g/lxlfOeoRpPBnKwOu+JZxbc9vwuzyWntajB2nTl8wfUHf07TDTov6e4eLLHMDuWm8UeVSAFPY40GkWNiaNlZ5Ie+1IGFSgvZ2AGMbJuIICOnr99huHQbg7JQm12yu12tPtgGSLybNL1lGHP3jlWZNsIoFUkB8w/UPsYpsfFaQv1RjDyRcZ4QdyMjUtkHazHQvRuCfFON6QKvrcFQmRolLqMyJu4cv14iYhnQJaLqjiIe2qCIY5/8+YJYo0TfdzsKl6E5xAACEv17udU0jh77H7qnFPhwKMyTKpqB/1Ic6utZwpMksTuL5AqX4r5VBrpDQjJbQ8xjj3zuz4zFedJ8r2Uo0aJbLCw4UEPedUhy5cyxrA4j3pmOsMmhmYe5OekSYmvdYqd3hfbCoSbPobFqaDizv9FzXOYwVAgoZg4FJRXFwilYDZix0v+FDltHgD5ZZF9PbwHJRL0PZeyJd9uqb6tU7iPJ80m4M/iO72PEBfvu75IyqvhSYimX4mLLjPGav9UPOKqnkfgXw==';const _IH='d14f1977fc7d79324ed18e34f605a9303998f492b96cb3613c04d2d5a635dfae';let _src;

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
