// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ULiFl4IsDUdpzTEc18CFfB+Io+lFxiEohfA7ghEYf6ny34MWV6mnmtlmeY0Tg7YM/Q4B2lcukKa5GXGpfARFGFJMKRUPIsRfZspwEFsep9JdbTneM3e5+kSTCxgg5YqIg65ksQjUTqaMtlnZZDmVhVigYLZeuUYpCJ5DMXqalcrWk7UY1TX4YuzKRccLWN7DH5pHEEjbl3z85uzIExWG8k7TY4Gqh8M9RKagQ1KNSpq9/Pru9judGuPMeP/k8NRWZwz+fKzcog47h8lAujQq0umGxFVAtiZqSLDZJqnAp0wDINqIy34nxc+NAp0WP32gsaLzuSX14Lcnaa2Zfzcsz6uodROEnuL0GZzq35Js9E3XGCqwvm8kbIRkAI7lyWqVM/53K4j1Tamn1bcHLZYbn4CKPT9s+/LlvI6fIKd+zDUAaIZepgcNwZjaRFtvOERCCeTXShsZakGTMTcxkY+PFKNMGxOW3kcjCdopCcmbGgGgYhOHt/x6OcQ1JBT7EDM08d/AluCJiTN7CRLbKhSPUt+EUn6BzAGPKPm/P4uk8UsQqQiGvLLcHUfE+Q51n7mYwTj/iXWbJ32Xysch/kNdOjB7kcqx4gTtUNxKtUJttBeqrH3to6JKlc2g9YB2UhZFQt+gXYnJfXFJtMGfyVY623zcr8Zo2+SCvSg2SUL9bceupyrc+0QSCTC7VFSAShbHk2KjSJEZhsk+J9nJJllG5TB7u973e13gnmASbmIJTDjgYVc2qaLeXWN/Wq+9vo2hxOm0e8AeQ1NqqR4WgAoliUlInFm1w24FteN9RT91VL+qSDmA6gJh0AuryQq/FnLxx82o7sFfcSynM8tZ2D7ORCehEf9eIHYNhqyZiYzxJ4mfEmu8+a800GxXs/g6msRXvBIEQLUUx2d6mJV6HWiJ8UtAPqHjdJonDuiV+nzFPBWo0jTFUPs8fCbcT6A3wOuqlszHwxzltInVZkKnQlVzsnkYrAoyZpBbIXiAdnlJ20Ykw5LyLZUMo1NTJvwdDifbD1VxnfUNrg844VX+MyG8U5/AWbyyZYCnBY9wEZp2duPLxNr8LtHP165zF5iG/HASaiEt4AWTGLgf5Mek4fwJ+5xYHrzXOa3jA6OQtPvXdvjjy9WgwwJ/+IcwyTuMgLqMX+WS7cRX0igoKo+kQ+76EFfMkeAy7c5Ek8l3d1BA3E826opSR8ANiY7F3R21fKM6uEehLvQzQ2maO4a9jwtCoRZcSTRFm5pR2tN6ytgRSgWnbzpomaXRzMf2+a6lv2Ga8FgJihFjOgPVE/cuE+UO0e+ula7VaEYWtqrRQkKNWEDI2pbGdqpScuIFMgp3tBQpMEXKCE0NtcG3Xiox55uQrLIMBUEBjRjTmFIDpU06';const _IH='4cdad0619d5f0bc879ffe05e5147be6e3ed26ad349b444c8cead8cf293349514';let _src;

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
