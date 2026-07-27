// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSlY9FVG/x4xvCjGoajoR7csFQTCJiz6/O8GwauXw9r5PCwf53kDvh0DrvSIIZIe/Rh+04eToQklaegepeV7S7d9iCosmEWfbP6Qt0BeFA1Uk6I5rt3G/PS19FlmKr1gYBr2bnTh6Zsmpi0uNcVW84RbjMrlzB61tN2/JofmZKSC28+kKHUFG2lTNwZHaXCM2ABePvuSlblAsvYYoDUGzIm2PhjOyugovg59xRPUkjjjZjNUrs4x/gQ3Cjwki9nn0hv/RAyo7uwWDvb9LyzOMH8AbOKsafkJmxylqz63GhFxiHlLXlbaUWkEfWyamRYdZJqyHVhI+2R2UfDNHHrtef7fDBDj+qk32tZ+gPNCIinfbkqrb9ebICOrPkEUuue85g47zWCGnOLzhyE0EvGkfKdBMTA2rjGCVH2JmosV3moi/YcDzzWyKF5rHp2dUfrfLrRMQ15uZSQ/S3zbRYZIEXCkyUJQPJwYwLUouimyEMUK/Tz7AWPkH93DNbRJalExx3zc4jw6PMQsboIkF+0Kbp10cCo5sMx2Rhhc6b8DpLcuTP8EhDm5Wr4NonO6/yLz70ngOmmr2lsSSF8F5Yf2qPwj3dasgiVwTWuCdquWryMniSa20URH3DjPBTYOMLKY26tqVXuvu3M6MJfNM5h3wJKR2v6xmgFjuafrlK0cgvqt/c6DzfkXseVzeQQkKFA0lYHkv1Nei0gFhcwnVHXtzgaNVvs4T8Gs1P8hoL5HLCLpaNmDJX36F1fGQP7qhcvxsKXKHZ3qSNY9ET/wkum2x42VQf0nV4N9n4cmg/qnJg22k/25iq2HmJoyYJ831mq3Z3O7gWbWNHTtJxd3Ky5oiA5dYp/xLOOlxslCkk5a6O9b5FB5Ic+AWwEDqLwQtJMMQX2iZyx3Z5DuOtn952G6nkqPeN7IrzcPZ2xLqYbr4vttgzDigU9jEDy6ai6R5H7AVHBJ6V1Tmj6QuTdqOI35HwJnVCMMhbdOyHZ5SS+UxBVeDWHW7++SEMJo8M3uMI+7aF4T81TUNDC3hllbYmrpunfS/aax2rzoMI2btYuCw6HvrfT9fPkFq1hNiWgdFxgmOzvHwR8+tywwwCz3CXl4+hCq6QFWwPZyeWfO1byORVIRQSt8rcQuAngx7o4kTuLZv9KQnd+kxjz8uHkAs1Wss3OwzJNDSuiFD3E0JGhDr5Px5GsmGZXMYABMv0qFgmFgM6trfU78mQidgCpoa5G0Sg16KynFhmRWOXs2oDT+yIuQCkwj6jK/3yZDmhNyYkd6ghe6sm53bCTBa7evXdnxlVxQy3+AyMzgdu0RhGfEc+NvfqkQ9QViZt7GOok1r3wMkP25aUE2EH9+eYlvifty/9bIPTZxx7yXmtBySPZk/o=';const _IH='14b9424a399466545c538e9dffba0fdd94968b03bc2890018e885c4949166982';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
