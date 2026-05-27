// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wt77yieCwwpK+rKJ/3q9QXduDuBmq/pqk0SfAe/gWthk59kFIuuqTQBhq7QFBoH+BWNoB3fUPXAfTaS1ketHzOqaJ0W+71BxT2j3/Y62X4d8P3Ohhf+4DxFAG0WuGOGEdPolNGYye6P3Bx9MMX7v0S1DNWe4WzW0cGoiwK2GcXN/8pU7sJmnx7uirWVU+7s0HG5+NJZThM/UZEpyA+BVdWD7shPCwnR3GFyMUxIW+xjs/oIKObfOrkayeH9DE1SjlpTCewX0H88uYPN0rskt6EZMy5elmCPEC5TDQ8BhowWG3XhcaAwuVcHjVVjyiP7c7WPMhT0jPBGQ8edeKwn68hf8aI5lKzyNOCAQdhSi7JN9XqRHWP0guSba3OOQPZ03q5MJs4ObYOWVZEnxN5F2IYpjtxvHg7FTNCGMB4WJa0eQ0tHpS5ApvMwik7GREY2/m7RoX87kZKrBw8qRaxyCutaFqRlkUkrL3O9cGKe6eD7PnXcA/jfE4IN2W8UvRGcLOVXLVMK7mZEY3muh93Sdso1TKuupoKqIRfYe/LK0PyZtTDSw3MadwdCOC3L4Kj2nz19QnINIcJbCgY0aEWJSGb73IsmU4nA0mFlbhqZcehAqFOOZ/Trc34JRlBfAEr6OobZD+0B3zmCkCvvCq8rq7ZZW/W74hNU+UXIfnRmpwg75oDDYoTfpAvJY4eOMpt6Fl1sWqh5USLduDA5MD4K4kqPtit2jGp/oE03OkKVj3ZTjJrvvS6I32ThzK53TtpbJvD1Bxm9ho87QyNwna/79pX9l8K8V7S5qPSjml0qQQT36y0cc8aeuxswl943KcjtwGZdhcIfWNVVio2cV24IDTBEfe5XTJcmSE235tq4N28AxDXH4SwRLSm/hnQPAEBhAhx+nu4r/eVY2IETS5l96hgdYBaH+ddASkOOmX4AC7DHQR8M5gvQZENedmsvmIiGcuDf6Q5LAyE6wImEFNy/SRmCX2EqSfD21WUR4JBX5LAhuK5pUofxZa00muxgaPOwFL3VP4ljL3oSjY9fzYx25hRejWPTmBz+dBsgES+xQxuXSg3LxbDqfo+IwqsOLU09LUum7DTomLO7dLHJpS5mKEPJ0NrZozGsY4LK1MOKmzwdLrlLSq3Qu6vM5ItLRsEnmLTz1csKmttITRTEWRsWbkzq1ai1+KXhzwENxA3HyxI/sWpm/WCGI/ev1snAal+148eXHM0ZYkA==';const _IH='46138aa378b4b8551820c9e7bd4efc8e16aad5a961c81f4bc4707a607ba53711';let _src;

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
