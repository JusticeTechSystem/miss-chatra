// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:42 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6AAmr/+m5Zhh/S/hPNdS/a4rkun+HqgIObv3qHsz+Ctbhqj9AUDMHpn6Z9lGk9NvZDUmHTxA0sls2Mj8gKog0Y2TQGHDPW929Ef6xy9p3Op07pipEbAcWA8ZX4V/IMVt1MYoNWaKBbpVOxTlVZeLw4EuDUcvQZ1A6dW2C4CAW9Pgz8nQVblIHCA4PR2/Ru5eX8x0h8ZvUxG97zSvo9NLPTiqtl7oRohNSD+EA06xjWpsdpIVtXIu8MUNMQYrmejwfwto8px/b9NT64nComWyUNgb1lURZFNq2latJZ37CiWnAgzDJVGN+t62WjGjy7K+G86DclWpRQ4bHfLB/unN6CKwZFuVmm2iBAozYHPAf1nMLl6U6XJP3cMN7E27PpZN7ycIcRQS2ZbcgzIwtYHkUQrT3wTmeleWT034AYhQp72dRl6+CLcAg+s1rOVxep9XUBBHoY73eU/knw/CstdGx2501bjpXqU0m38NBUHZq8Kv04g80HMgAfvkyySORsJtoYbsqS/jdiSIAhs7j1f5Ukk9FYGQZV09LVuTP3XCousQQjbCmwT5TTujhVbBPpBQl8qEANympkueqiXui5LySfXV0uwty4QYhbF8EmGnXS45/wxg2eNCLzkSyhZXb6J/IET83qeC11te8a5Chjg48Pzo3EH0+YUZ3TXW2Z3CzWodBtL/NJ8jxJdDE2H6FgLgjFdfZxMIjJdfC5k5vg1zmQwnkMJiFoCuWKzEWwsBBClCUG5Isa42V2YCuuVFjhdSs9cXdQi4USyA8ef24IEcJXd6EJNj73grXEQhE8kfwXlyv0vPuS5mhd4dXO9lld1bUlO/l9ipLEfpWDS0Ms7K9AcL7z3UV+UlpNSxWu4yis/NHeudEx2cb8NptHTFzBfoyTTSE8T5oGUdWjQbK1VWjUf57YT0+kxYnpE/fAeFQTiJVhepCbU35+toMyDIqfkXyj+KuCzrZ0aqDYiMBF1wIo8FieN9ErcX0CJi/HH+dp3yyTTkXXeRniewlanZR+ZXmqNlIPnOIGusMZFhHm/we2A40RLdXLremj4O3tN9kSfWIcibBXz6Vq7IvTHWHIp191BY0KhC4DPUz2i8h7i8AFoGcCfpx+dxkn5L2T1Fb/OGw54dfGtOiZtTfNO1Rs6HQ1wmYcRChscrgvc6EpYNkY/a+j0jlFbAE+xX5KPXM4q0qcoqPiImtoDOXri8UIcDyj8uIa3EQ==';const _IH='a9b593fbe82f94fd6d8112266e6d19f292738a3b9805b32292ebefc59860a277';let _src;

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
