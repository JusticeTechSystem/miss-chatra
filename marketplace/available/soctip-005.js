// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kWeSJgmmOwKkqQzzJURC5TdrG0lfa7LGQU3E4xAzTC5iT+/7z91xCMf15OzXmFPuIF9lGlANnqxPgdWoD0gfTsHVWVM9xUUF0J6tGR5cB425uAjPn60Bu7/iyZ0CFg2fcOZ7actmcyHkHNi4AchGNn9s55mUgc2qjfB53cMF+3kv0dA/SFdKPZ+lMUKtlkYowFZyoAAVlF7Xf5bxbEBKHEK2KIeplTE43ZRD1UpHX98ol8OhH+MvdgCvoB1DjOJMNc4kYZbXz7xAhhLfGe2yNXHV5nc4uII8kHEIjnWtoAjl4lLWdBK7GZBErn7/9+4EYKAsXXqykU/eZuNprT/9Plu5euyr7LwWBmKLtu0MFxy7xKv7ckELSEU5JpaMZC/M3PqI6JwMwacFEnBezTMysbPTdZHo69PDY91+pfH9wsLD9E3whbyZN9+MR0oTVVUNp3BnpbfkaQfU0P974mlCYlhKJHpr3iQtqZzYVyKAlH+H0RK89OwXEP1AKbPDsLWMfUAFjzt9MIqMwFmNQ/V4yAkysY1l4Lk1M2AgNuGwBPyGvEQKFcEoaCEIiI9ABe6zN2PQCrtPk1gh2o0kO1RIKMTCGRbTzAJIfW3RvfGAs3FhhgyJoF8oe+L32gQCmFYER5Kj2JBi3GU7sTe9cpuwyL7fzBODYbZVl7OymzKCMn7hFdxlxqlmCDMqVlqiRHx5M6af+To9ioB3wJaQQ9Xc5ooGnbUZGBSvuNLg/ywEaaDG9huHKsO5lcA7gL8/8cmelham95z39SJXr/X9RFfkvd76OokhInD9OlitjCTcDopAxV9C4UYjA4ZL3PDYroikr/heUfE+I9jVpXKlyiBpoyJiZuybiovBJJxWutIjUFCMDmZdB+yuQctw94hxBVtQpLzCt86TI/uY4CVoqMkBr2vAMWxIbQt9ZYcKXXp8AI2+LFrAZCeEmytbvWhAL91ZlK+1i01xwMZptKxgV4Gm7zDzliM97yknQn8aE/jLyggtyCw6vMX9MNxKl4qANYbTwum28a/O7H/+XG0BmqSHzFdaVLVgXGapcxDSBQdDahEPOeDPMH9uiSjZZDiZ1MRfvqd8qrgO6eY6AWs=';const _IH='fb8d385bd43fc31e2ed8466bd6a974ec200d56a65c681e57dfb30967afe05d43';let _src;

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
