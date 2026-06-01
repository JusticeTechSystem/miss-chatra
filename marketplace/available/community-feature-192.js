// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:17 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7iEaKOsqLBRpRHmSFaxEyqt4qKQfWWRXQ0PVgWWKgnFS01l3zPNmTqoKAJmFseda+cg55AYS+WaUwRdIR5zP2ge/d8+m0BWj6plornDgKOdLI6sSBKltzCxuwg4P1dsxVWN9tXlD4P+1AuSuyL7dB3H1EvJdDg739tIngip8kMWjreZpFWp6ZTFsbFweUICZYZed1KYOXqvDaolGfN7nFR8Ld8Q1eCu5u1qTYwji2bnC8VHJeaYNJNINMPU4OrX/M9yU0Cgq6BL38AaOGvvicV1QzUmXakqoG2VL4yV9N5x7DM1i8jJ0rdkzS2GH8vqNO/032PAqqiHeyRyjOLkYmoHb43BOJiX3QM7X3u/eqP5fDXWipNy9PxruE4D5iBGi+99mC9exe2ijDrRQb8emOfyl2mBbwpLW99S6V1ohgkc8jCWAVT+gAhaD1Q7fJI8op5OSXxoam6KO4yu0dK5YTroKXqTP3YeCkHwdZ5T8GOeUEdjwcfgu8TB4Kvn1+VyaaZsPGYJgrgfTh5grYnPx1NKJ6EOCD6Uf2Ioag1rj7rvRP/xx65OPoYXOhQFEIY431IJKBHCVmZ5JhBqjtT6iohS1lIW5lWcKFwZKBD+qe2ggxuxOizO2wr+pM08oYfk279SNUaV2Z0RFWdGy5rYNmgXuW1fSGnxuNdQfs+ZLLchpXTP/5qHmayWV2f1I2s/bgBcbvpXG+JzYBxCHMhq1O6uuB8KovkW2bFooIbqyDB0f3TH';const _IH='253aacdaa05c0f3f6d2357dc4ad03dc9c1a83eacc9da86838ecd4e5679d8876b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
