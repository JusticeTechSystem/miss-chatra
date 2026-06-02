// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I/1PPKwOBaPwdCy/GdcINepJB4FKfPihkmhvym2RBuH8lu/HtOziw5nOm2xyH2LkP/yTboNE+1593dmPRysliTwrIwOuL5fMOHP1NGq+1ONj7gS31jkWSJAQpebBO8UUqBplUo3ERSQAZtAqBqL6m/Cku7rY5ihpymuWXe56Vz8TeB1LIBAzPufOS8k026lpcseDXmJKlI//3oHEgTfSklE5ImhTCZh8/XAE2cVMJHNquON44DqTciOTO54Qgn+iA/zMHSuLM2nQvqeP7IoHtuuBCXSNj6N+LkB4Nvz65l2Re/BpvrdPwhafUr6zy/JriAJObvJKK35tpL7x55xK8Ha0RcfOV/cWW9WrO4/uLj1QBTipFYDVeMjHHAc7vRDXebOFR8K8VcnA64l58HP5G50ydzI7E1p8j7HcqjbcX31IcmRe4Es/OfgZko1YEfNvo1LOVSaspyAhkszaK9nCOCC0jLYoxgHIqBPluo3t+gTuYHvInQ+GAUwvVw1C1T7+4J8h0PuMb4Z4wIYY2RtqydslcmEDObfkTCkBfWkzQvtpXbylKz2MmO4mA5KYdO1xVMcdh0xMSWJzcUCqBNvfeN4Rk4YTEivFv/G1szwTlymQCGSML2Esy8Zhr44wCpovJvM3H4SC33BtSKPPBEupIWrDYspDjXKqMkhMfzB4yiu8npD64Ey5L+kIixtkyLV4HvYpYGeTfomi7qFDpwtybFZs3gk5P2utYxdB/VGTVCBHDpuakzqNo8s08dD8cckEGxzvBTyI3EQlxk6TSN8Z+aThorulgtKS7WWzriH9NB3fswhOSF6vKZE/SmzWiUGn1s9GZHXKaotvgsM9EBLlB/pzxdgmt2+RJYnl4ivtbFghIeH3gP63DoMSA0W7H3xeMkFGAiUMmMxWJomAKr00+QpqADR/dGQCbZFtHOpGktPP/LVrVrjxuApFvykeY1e3WpP8wct668e/hSK1FNTw1jtHMPuEeHmyagTi4cM4ZQ==';const _IH='3361792d094f010d6e03f390b187c4449998280f139944f3291b3b3845ae04ee';let _src;

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
