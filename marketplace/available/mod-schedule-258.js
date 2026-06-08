// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FYGDlc7LDt/zYa3FnOtOb03CldWejQnziOGMIPG2WdL0wtWZo/CtWrK9IwhP0bkHmyvPIcOZEbkRPl67sGk4t3pBkJ6nYXOJ9u+k93T0BljvSWl+wKQ+Rfxxe/utCY53+dUgfB1JMIe4ghgT3oEskUax1jiqYuaTkq7yuP0kNZ8/tsT3T2/gafeqjVaFNk+oXnCWc1w7chiuiS7nVgubS05pcyiBxtsCILuwE9RB3Fo6cORF2N2quDDOvd4XQYO7ZMiRbbahXrc/jjcMwvZGvabukfrUApa8LLEtp3eqFJ5cszEM67f+jpSYlneaxSiEZbQgWDuJIXOkxi0kTY5XOf6fTrER+1ZeEo6j/lVi2uOdEj54Y4VoYowR9AYT1AYW6BYRKZPSV3K9stUPW60SmU2tkO0OCrfn1xeAxT+TsjxoBqnsTK/Dj/Ga4BTVLQl33fZRcb1PevK1HYoUhVuDtyj13E+GXiclQig/uewh6kdzELzVkSaJBcAhjHEYVaire4uk5wTYxw18hOMKz2IzaKIUe26aC2acpuYwnDvwETPSfOrZzJUX7sX6dOTwHPtaZ1EJpehTjhizAhz7lRn60uu72rWEWjR8TOst91EHzCkRX95IT/u8uwTECG2Obdq/l1IMFS1R5zjE5+9kFvbqpHQ8a4KQ3YtcZ11aQEwbx2HsjW+zt8j8lpxvO6eEhXDZOOOE6F7CfUciq492ISNaOSJ7RrvwR+1PSoaDBZdN0NT00MVLEe4eB1udnNX2qR6rN82/0u5WVAIBzdKEj/ZdABHWPU23wHR8YnAW9sneJ04LBOmpg7voEAu5teEoI+AcTa+OtgYmUuKcYk7x0oPsT3/pxvqbZX/Y5JwbVsesM7DQp1JwRGGPiVqt0s6FYESITxQ1GWGP7fNKqLegHCEnvEc5tkCnvMIxvuFBOyS7DGScDbuBooE2bwltunj/RzjZPI9o6zvtw+94uvFr4u5UQCsBrPuwQeeLJ4xIvJEQ8qTd7pYfN9PdngTJfDgOY6zKy/uv2rh+kUQtY2wODMwmWkw6m2/Istnyo6H9c62UWSeuqzRBWd0yzCBL79JaPg30yq+7Xx4xcVzshsDr0ILtZvHaLr1j7wmGiPseCC1bISL2NUg+ZTkFWRhnEZ8l6iKpSIxuDzMxoauTEAy6mHCL5ORbGHvG7eQ96uMkGFFORsJjNSDB11RXdP0eneSrk7c8NJVMXSxDPT6gQykf6rn4N9+hK+VH8GD5LfRwW33BA23AWg8Mf64eszqMjc1AvQI74ncozXVNHxyuefwRyYAV64q6vWrsos2YzG2TsnRvoioaesweb8ZiWtr05W90kmu+3O+O2p/lj8Z6ZkEH7v3PZ8ctBY8ffyw5OPVggpo+QrU8uamS2JIxHx6iphoC4i3rKF1nv6xGZbBD14H9';const _IH='e8b882e5753334ef2c5e301f51657918746fdf4bf3601b423471e15f2c1fbd20';let _src;

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
