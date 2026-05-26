// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:31:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ubf5lCF2MPpuuwohxalBxxYjS9PqTc0dGcnjSq1i+BR+Cxy56W4hNcnOL3X5pwIhoiN5MTMvAtBEHaxKdgGeGzrGtWqTe6d0LwLowvrkgZ2UVnNG8QS5mgd9w+5qXeIJEOtJX90BHM4gnLgvaXAQI/zWiygSwJHFRuTbtvJCer2hzKdEHH+iPk7rLfv7OVmByD+qGNaVTflcdAqhVxlzVfYZm200XPf/kRZ7JUjKpuA7fnYuDZ9O+81lbm918GhQ+IQ7kyuDcZqA6Y09hOJuv7jelsdSymValMQusZZePE7T/TwbPfCrARJotSl/PbYxvu4rjn126eFYimviq2ouO+cIgg7k50q+FfGJKcFQVdWMFg/O8qtd7ivWlTv5DO+DodoWV6mSEG2UUj/xdFz5liCfbMEsQVezt7GdkZZha8ATUaCalu4lIDO73+NrQwL1BqwJZz4tWquyR8i6ePSrE6NEEZjLVBG3qQNOSLVBty9fzQmjwvuuedyPRQEUOg7c1hOqV2B1nodqxBx6wOXOaSQw2bpXPNN1RpI8bNRyNi8EJhV69qBnl8JwbzDD75QpZCdHj/4wDJXtyn79fRK47f85qUc4jUIlkY1B4smfP3zpSunNkww+Lpeb8g3+aA0ctHrmC8YEL5L/fZCQ5CHtwTXNWNTEueF5H+N2hVlQs4hO0n7vV/ivTKuugTyUWNOedsKsTnyXVuqnIKVDZv+TX8f0PDPVvo7683LSV8YHiogFKkXTmoFjBhRAS+k51te1w4hjx5iK1W92+qpjmwVmBdMyeS0xqbsgOAX0+uiF0FkhxpgDY5oRqG22nKxFYD3t4QDg+raDSsexA2gaBb22rHbfg1mU5OH8ndyZju7gz2Grw23IzrvTMenBn/Pr7A63gzNNZhbAmo93SLBU4gI+6pDet9j5zYv5DYJdIaStK1p/QoJuJjq8lsUObcKvzqogVo+OCCZhFTMgqp/KV22CPoEEH2HpexznWohHY3fRo/efUgZzCljQ9rBuG0jObGjbjenl/KbCL/lPEI+JDiLTFhep38f+cc+l7I0q5ADVkZStZMzsXub02tORfwyHnccyRaOp70a6VcFomWt91Z9z1UDtJuz8yAC/IXNNKqSKvHLp5hL9YSrzy0PdLfnKZ/DE/fGUxf9TxPREN/HpUpIrXYwlBuwtKAJ+LMwN8icVG29m9t1lW51TjXlw50j8sggpdZPo1TpClqOyFud2kgE8hUZV1YKf86JyFNvyKmAHu3PhX9KDRtspJy+iMBD7dNuaX407XQQ9Rn0ogZPHU9NxMrIJQdddtMXEPbb7HDKbjxjl3nHMLkRABNTE1p2lgB3QXb4kdQDMdGsmD+2RJZdH1ge1+JmVtUyvSLhZXvRVCmgSkzUVs8gImaQdkK6BwdynctQeTUT/sDuHhgLIXyKc67fguirlq7BvGUtgYsPUx5/hl57QYmo6bCA0baJzg8fkyhQFd+vLuVCoOiHX2NHxPfnTodE+8tNkgWaWJcv+527oTg==';const _IH='e937d45676f9b3013d80cc47caa22916bea5e7ef39592fb3c601f9e8951f49b3';let _src;

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
