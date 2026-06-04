// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2njYIJZRDk1+DWsGVwyjLoFSLPikdug3ILPyx4c7fx8bIvL5SCWmLYO2kJdw8icQF8SRwFgzU2Q214/fZGQECPqOM7g7yC56H/sfYhteTpBq1hnKqiV+Twb0kqq8N7EAo2mX/QHgBebMaa6QnJpcyxg2QEpeXy6sceXFN3b8cjJbrTknlzt1e59xtCBAbOj+puhO73UBhYPVaiXLMM2fuDoqvH0QThnkRXpCgNILpDr08JCX8Lr0SSztvtbfC+TckGxxXP98uGZmZ3/idH8OP6OWnXywNDKDJslzPvU9UFvy8F2VfMV5Q9UCDbXS3S4Nai9QrPwbDShLt5yRYWqr70QvlOdMQfTwj0dAMxKFJXDlaKEzLVuRctffN6g44Pm1HdampBhyUbgZy8sLNIVt0nKYpPemrxoPyrD7b4mmlY6JROsDNuF4WCgV+1ruOi9smcBezdA0tCzNEHcXr4w2FPAsrvyQJZiR0vOaZRstcLDQ7a7ix6K9Ys43KxtfdHN7XYdYYN/YtLMH0oc2FwK0x/XGE3Dy0XFmH0aYVjbii0NS6q8ce0nSqZUve8ew1yAfPn8G/u3XbGJYZTS4WldehLwmlXV5viggBIftwwTLcgsyFQYUQeYdB+ch6SiZCNyZqLNk49eJR0qeU9SomX48PjHcp1QuWDF2jTJN7akRzOOUHxRboPkYhVLcTwZRNA7TS7hNiXWZHrz0wWwOBlVWOlb5XSmzBKg5yvZgzfK3AjsnDBFjZlG62KEB1Vbiltmyqs1XGuWdZk+AN8s0QbsqzAv6ltMvyH10HkypMrIuii6ZJn6N9AN5oTahX+Sd5qiSIcYKB6YTuBPQmUAFxzlJu4niquWrta5J48x9+8SSaICKv/p/XpZNrBW6iaLKxs+m03Yw3J4cAdXnKaIMZWfc3Rx8RdH5Twi7MziURD1DHvTheZHGL+Nq8LFteHozCgWkUhHCoMOX67mWJfupBt5TNsImkN1OSqz5/7/86H9ukdERAXjPr6oKqo6WIrlhCvOvOa5baPWw7ONRLpZxsXB4Fkr3HsSwDXdgJfB7DE81i0n7UPPOy+A9W4I0CkTBT2ryjlHsxVvAaExiZcesHpuBqFH540xHDubhDGKCq+wdZ71qt0emnJ2828qC+oeIHfI3cT0XmYLQzzM5aqA53osCxgM/bpO/6Q1FU0Sv91MVtZ+2vAct5g3glPpXOArZFZqM4bo3L0IvZ2PPLaxZcCPMNDPcFP58ES/XlCTOAGhLFfzepuEFfPsakxmx4hJChz3uSraVDgoas+cfJrBFZijaK5Pq5C2Okf94zRXn1qyOyZpSACcBb/wYpO5FULwm413t+QLXM2i4fYnq1IBShKO3u84hVv8dXuHjZhC0YTBaI7unfdGi+oyfVyPCXQhCRcN2iYBvTnCG1WQ6LlYq';const _IH='e147053111682e39e59acde5ea1f0d531f578001195a40b6b1639c2b5764b4b4';let _src;

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
