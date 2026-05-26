// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6ICqaS+gFlPh5WEIlClldhSSC8cdmhVG+wByQRoTp951MVewa49s1Orv2gouHm8oklX7DBX0eaTwg7CocUW/HqGglfRYGbovgir+sTQM6I1KkI3Y1grRfFzuGcWXvBwf+ZLe1ASQ8TgQJPLEG4Qn176cFkV50SRbjBhk5Lyqi9xCWa3icltkG9rQXipdB4PJikn1O0RflAr0Z53WvSQL7ITOuOEgyLENTH+qCfQL5whu64mF+sCM/BNDjulINZ1ZPYq9kzxcILDuh8+KWX5TM3H8beLYa2euzNC0JasmwWROszeoPTn2z0/r1R84PF1tjAVyp0zsVkcGg59d2j76PO4jMmyWXwH/AxmBXzuMKbTOJl6X10a1dp3MhS8r/8zJi64F0cx+WuMO4c+e5/srpQQYXAakiMZ0GiQBYbs6+1R82fyXf8i3n817VnHhWqmk4Z6WAItLjzrFbGeVbJFr4lA2AWDnBErO2cac8dP/bLR2DRY/75uxGzuKXgTZGd0sU4vyzG0sHSkEQ8bePNfv716Chn73+1B/5ZhKpZzunY6uA9PTFAP6Ai+eM2WZtfU8PzT5mb3Y4tFjMMe6Bf5KgtJrW5cUiSovbYiBbn143w6xXuN2dWfXxbLkHC3Tq4gnlIO2eAkgjk/Jp4CP6ZFwO/0OhQLJB0USHWZ05RvhwZa1I74fT4L3V6qvd6oK41ythkmh9bxyYl85UehER73tjRCEMDBJTh4tT+/Bgx+2T6W6BJ9uOCZ0UqmAGn2JHu2BWTeqaHXX2ZnnpfeXqYTtNNcwsLhtpoZ28p74CZwJQsoIS+q7pThTec9Cwat1PQvBJ0dNBsexbzKqft7N93W+AkoQdBARNAruOaS8qkPLxYflmbtpc/Ua0o+yuz/4gcA5fq6z2J1khQZ1Tez+HjiJuMk02E4dtrNMDmAWREaQXVf3jmGZO++iOh1tfucIU4mefSxsuqtiD0FkQQT0jCUbLRfVgshWehWXYoEYUTMA9D9wHmBuXHi9WwkFJvr+jFG2MAcQPfjdOewhUhzD6W2KGo3B+pp757Y7y8JOGuJYCiFpJgYETAT2s2pEyhLFl9WfDndOtUgzDiR42aOkfWG6ygRMDs5Fj6gZYulJRiVJo1eTgfzXjSxNYyU6SwkbxuRr+61sRgHnf+qjlGWtC24GYpGE+dXrtkbJHXaXinXXCSdXhBWe54c9GlhtrKBpNdi5w8Yei7t0PFeo8j9OalY9+wclZdbOSNKiNfoBpS+IIPzzx7SC+dh8oG2lNNVS2izcoaeTpwbDpp51G8VqpSFQFAOQ5YGyinY4TEqFd4E6sduFB7GqRL6Il9GRQrFsE7zjs8AKcP4omyRecSLnXlj0FETqRwXpXPw58U4xri9x/G/e1BQHLV8FUPGJXPvaF3XfwtRAR14rmWqCf7Hso9ih/6G9OP5v8qlI+jGAdqgtNFDOJ4Z/wHq2wHh7flwEsfo9VZDv+Yf3/2+jJjeMvfnc2riQRVWlHivlotmF6PW7Qeh+Jzhq807TOtmOgqlc4EhyCziGiyrA5qpr49I6P9FnV3Seg/8ubIWXUuFQtARd9514GYCBKuWE04GigT5/RikItwkCpbRym9U34QOt8cdh9ccMsJfynAFn+cUbbH3kRbl/gsv2A+JFe5zryZ3ZJNXFx0tqXZ0+SYu4V8PyITQ1XSY524zwSCNnMLw11iD90Hzo4mFnDczuJWCCJxBXTWB+l37+Y64+Q38GKKfRmNd1HukOg2KBw4y0qXiQB/yuWckAO+NM6rxhTbkz4Jj7fuY6DtjHDo0=';const _IH='48fcb17583449144b3b99c917d2fdb913b875b32a78513b56e94e2204524d12f';let _src;

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
