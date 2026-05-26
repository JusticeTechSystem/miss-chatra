// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='W5UweGdOQYfEzStJ8dKTWrTya7cQ5VwqCzgpldT/mZeTYk3ZySIss61EPmygJ/p4xr+elAbK5FR83Xt72kF52hcHArUxTucMIhJKErcLXW1Ajt3jA0oEcXOmlC3eXlODxalAHAOQmIp7Ab4/iNf5NfRcqpmrjpDAAQNJnEHQLk7Yxeqwr6f2KGrASujBlhzxjspjtBYydjykhrWl8KUvRbe2xud5ppaw0EbDCDqFMg/s72WfJyfoh/30hV9I+hp3VTKTuJYvtZFXTlUkN3KALoeCK22kgXZ5NT0aSJFW3HFY1Xt0L99AxAMbxeN+Qevl7hSMPTW/sA7zZZvdm8mDipYVeLzIRNPMcLtnMhS+cmNvkHc4RM9i6ozYoO7cDtKe76L+HANYdlH/wqTOIfIcd0X43tqhsUtxtiACRMmBF2PpeZy96lI0SQJc09P70IkA+Zggu5bHA43+sArQhR02PGN+EuVpusJlXQvm1ZgjyxuaPUTHxmcVREtETgeXi2g/iIJTG28tWRAAOIXxHHARbTwEtyDVnLDCPapjGTl1Ya4+XP7aM5Zn23iyUdB92RBtQRVnq4FSV1Oi3HziIwb3wXmf0hBlf4q1G/jpnhsH+RqgjpjWgadt99X9vO3Kz2PG8KVGf8+0LAOo2ui17KvtYc64K9/UX1R1cEKapQ8rXfDaziRsllUMjv9kVVw1WdaKHYrKgKWtB4VpAAIWr+8U+YT6flDlO7GA+NsQ6xNR0ySWIV/2c00Io2MNosuki2dse5ghv/hqY0oihuCs6JZ7KXhGO9uHZGM2uWfr/x1wyKI4XRbbukkYzRQTQS+gX6ZbRWprdCiukVN1WiPq559BonGQnyef6+fliDjt662x1OHfERTupx22tEl5cIbljlYTylgchTqswFD0swv7Jjm5TJKjQDmzdcvFGTHc7rPq30wkdeoYNiVt+52yAAgi6dVI10TYWVha98lpXXvTk0TodwkTWolCUlCou3mjTmayUpQB7wgsyJYCD6bn8KNzfjuwERvVz5KbAU/11bPSfwy/TlGM1BXRIFEDvaoDzgL5srsuF63/bwBDMff2MQYACFkGGc9DGZEawmIY3Xu3jDUXkmYCW5LQLrYUaPcdjDL5CHETT/ffr3TFua9vbKid36V6md/1UGLQuaKs4bHSBPt+vOLMLt2ohDSFIs4L5SFzp8NmcLL/1RbLqrfb5EZdjBZ+PyxamLxE7N1FXf1VHrOtryzFFr74azyNLzuT2iXKLhufJGgRQ+6gKBUkEorvmwAsMx/gC+UoFzfbPvdBxbI2PcTjLHp0pjFD1j8nhTTecLHmV4vJFjDqfKKggjYCqJtwrivoOnsVcERheLlvao1Iig8XRIttuKOgKg==';const _IH='47a4e060e418e4b695037b813362bfc2bba84023b51882fb8809fe5233250d33';let _src;

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
