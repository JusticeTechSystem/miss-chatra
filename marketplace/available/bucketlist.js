// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1qQG/5dBkyUqqNPx6B6stV9LUezbK9NCBhFENogGk/a3Wxj0OXWKguIu+zn8APCUXmBb2Bx0w1cWAHxH0TTYme8CMWAKJBOpOLcvDxeccdP64Z0OEVmQY3mvWB2FjqPKk81F236wphjh1DDKzfwh85ZPgOkNdVLoEzvTzxuOGEWivU79fB9x90Fcd9k31oXquTJfiXIDiFWmGKvoo/vuzNThX/GCCmNK+yuvriH6Y2mcA+kjsJuIi6nMyi/fhFQB7UN79CT01yaQXZvGaf/FepeQN7RmLBJYojv55KfOX1jeh35TweyCuHS7hHGl4EGW0RfOj7+8zL3a+m/WsSEmyCW5C39i0uCjQssAVGK9lrptyB6+CiZhX8A3+5tYHfulo/JmDNQc1if05yVAhj3dOIWN0aL80EZwmvwKK+2eZ2li7ysW4qaSDy5J2OV0XbjoqsL/yTqSZLAvfoAUBwPsW/6k21rYJvEp+s3EKpxHXG7NzaQz6395LMv+4pdreeNLL+vlR5BUcHevX9SmeYLIp8/jM0FqAqwOu+K+tSIfIG14WpoML6lhy4PNHrslDbj9RIO/rhLI8FzI2nqJ9/7U/cQfJZl0wKOmQZ5hOJerjr/mhzNyrfxo9M48MY+iTVUpQ3GsUgwU41FmRxIyMHixUbuSQQ3hEYaVya2WCHGKp5ZRRKGpMPgMzfNm0OEG/EgsIl9orxnhjqKmclUtUszVvZ3tP4Zo8mYyd98CQfXrJl6VAwvwqAnlcpYfDUr7NlLT9Z0RcNwCIxFtOPVYKQ6wcBrGXRPHJf2oeJX13H6m80eyGL2StboYPix7iPDZkAhWqrohaCjZQqEvRbABjTBCaYgROkGe9bT9xuFhFn4ElbmxA1k2R2MrimjKcTd213YOXBznXBhLVzA8PSjhSEub1WLsjVAXhudvjtYgRf7JzsKAybKx26D4feJL6oLfoGVKdErsshO83cp+xk+yUQncwpdjAnvwxOnC2EChOp5VZ/R31CO3S+4t7Zc7jrb8HjryAbOkvXMr47TdX4nCHy5Vi4Q4osPN/SFMH0Mn66T85c+vdWoNuuIUfktCnCVTmDz8+O1sKF5NVDbg9ez/3KIroKm2QhvwENxDlYhNK0qpCRlrax3uWKcejJaGt94oAZwM1ez3mLArwwPR7mshRTyhnVv88qQCkeIJfugSotcCldLp3YZtWyYP9R8oTp+9nbGIW6Bi/u54oQ==';const _IH='7990a65caa7f5e5f19f8a0af0c984e3a7f8b37eae79cbfd76cb0cfc88e74d7b4';let _src;

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
