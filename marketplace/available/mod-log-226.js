// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTUJnaB8fndiTUkhWbKRX1vxe6QrmF97qwhv6A2XGnxMsQFDI+QPN/HOJ21goVNwuCmOlXJsthrP6mbefuPasSk0jhwvMBp8ZsHJWGxe5Z7erKyk9g9xtkLUEhHfcHwUe5rBVF0zLb2iSlEDDSF0UW8fwxkRHBhS6bZFxM4mvd4szmKljgcmSn+V0j+OLelpzx8VAqOqZFdJCQCZbfsD7cImGg3rSN8yuP1dANCE+1jskUDGZ1+Cs7Bo6J2+fUn5RCt92IPWaeaWTm9cbUJ6njm54yLOFF91g43z28oxseUFBAnRJ1v+vzSsJ0wNXbNC1CuH6jkWTzPGvHohEUc110HwYWgfKrsg0llAFiFU8t1kKvik5Hs5OWozsxq6WbN15ZBgDoBIRvQKgsSthj3l7C19UARXdVe06r8aRq8wthGbbxVJc8c97T+iRD6fxbMcj2BLsCLYSoe40793XoDBDUHkBIXpeK71+TFffB0HyCce6XCinUD4NX39FR6BbuVgXT4qPI2C3cmJ1ZSXXI26X5Y2X4/8+W+v3s3wMai0+QEE+AcX3OKRlqfidbhUsiPFMf8zDINgubn4C9NAS0Za9x6VVJ4veEYegDVDmYfkrRoZ1SeKsA6gPGx8dKcpE7n/adgyt5xdIi+bBJLBpIfEEDKYZM/mkQryDhVQWthqHo3mm7HdLKcCEpzA6FBXfS7e1pAZGIasbS+IbPN/ahN49I6nxilSfbo263dGselRji5QSuZ2fcIrv5CCyXRuRG5bkwbYMwAY+lGcJlz5NeZu0DwS0oV8C93BiyR8D+iwZ2dsd03IJr7PQuKBGG1wLamCfeLQ5Slt3R6KBvq0izVmagHehb8iuh/RsDetR+3Gb4RT/ffVmNU2qnO0i3FCVsbHIDeGPOgJ8hA6aT/0KGwx3Us1MbBiUW4PVwXwJ6d4AOarEeoGUmrV2gi61qgn+eF+XSTGaT3x6JETjHw3o6zvy1LfAmW9O2s/vfewI1ia9fziKWPZ+pE9TRkVjIIc7gvaMfJ0xDFGIMZ0e116k5VLALFQQQ0qgr8xg1ZQfo9QKIoF+DAiv8fG1KkhKMpOQ8ZoceUdqEy3KrnCwtvAMCzgz7oDdX1rWWafdCO9uZj3hxECCjoat6CZMJ9hE/Km6qQZMB+blrrLmTd7EVzwBuHiIoRxVdurxl5STtz5+wSlSU3d2OA59BQdxqfKMyGX1BtE45Si5JTkUF3tE+mjxCNy461KFloIyqyUWjIpEIQuncJGdU/MXHPreFZWYLxXst70gFtSYAAyKYqB5z8O01u8NZJopwhitvhT5R1+PLWhUxSxSrQ3ru3gDuBbpP3/scJKkg3O1VqFoGIMupE';const _IH='06a9fac67734bbcd201ea1432f88984638884d9ef99dd5a8f065de49d58e4447';let _src;

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
