// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQXoCeKduVjGlbvt/Za7sIf5bkr5ihZXFudxq8ahBd7AG+fjcI4KOd/8Ze6gy8vx6DlIw6nq+8TQoEf182UhTUq0ytDk3qeTv9O19+BXTJ0og21mPzJgoLEy8Kuo/8nyHt8+ovCfNsUBdLZBwaec9SHvt3dHTwSCD1ia5dYFD1719bUkabpJAauukFiwsQC8hkiv8MufBzLA+pNYX9kCUsmwc7nzZHd8H9VtNLJWjvhgsAkiYmEP0KbGfy6wlr4o2+zG6ibfyGVeh/vyabJwMf7X9zQL0HGWGsUvLkxJBQ2jg8kNyddMHSJDYspQdW1qgisv8/W3Q3fTndRzbHNJbLPtQH7hhdV+JEMIh4odsK9zR0obd+TjvL9TNWG30FHwHR8eIEsZGgKMAVSU4Y3d6RB93tqebET+JQOVwoEZmzRftfqjaueXSeV6ifd/1oC1vJVLF5NiF3ztwJuyV2utVK47eMwsZzsMoK6UMRJWPQ3Go/07EG5/Gihi2r65seAduk8kUilBfIlZARVXGEtDke8pviO4OGZN36MtpClhaQ4daJ7pY1MSN109XfdmxpVFnKhAmvXof+PDwaQpEcnHOgVu6Y3ML3/+T1xbFjDdJrzo2MfhqZSO6U/+4GWjnPcLlLz2rCsqH9chMuiUJ0OUR/y+S3b8EHfrfqwhDYRX6k2BPLivQIl7kUIMg7bjP0UIXhaT3irnvhGQa2UwT8kHPvewsBRWSWV1FR3gLBl/C45dA6UPAXntlZBz8BEZCHiPMX+y1dqwHxn+D5CnGP3KDtzHU9hk7xLLC2rI1W8K30kv7IfHX1C6K93Ag4brNQcWYtNBdcV7O522sFT3kS6VsxQQmlxrzfRVRw+3XfJ8PfEsS93IaucBWCmBJW7NbGRsjWJDo1NunfSvAdmP8ufCEnL5oYtzyQ9SYT0786SCN+8lR03/gx8RKy0NWt2IRXzNwP2jijDOs8RWM7L0rVihv+UIyD1LGmDamfaQ9Ab1hc3S2ecay4xlAVGG2r/pZ8nTeBzHINkiQvLqGdSa+OIdQ==';const _IH='26880c5c6a921af1b2422d01776d3d5a7dae5e064c9480da03e259e36034666c';let _src;

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
