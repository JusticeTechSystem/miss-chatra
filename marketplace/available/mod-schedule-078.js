// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQMNeraP1o4/41sv+OrD7DQrl51fDT7Vv3G+lGNXyu96voX3nN7U1q22soRFD+zltfXwWIGOMDPh9Y6nG3JZfveGUFJ5g/oFKXzuSBqJyCDLSFsqm0AmPcYrUMmQj5e7Og4QDhGZETw6EarZ047PtIFnCJHxDm3zoI24doWol9GY8XA6bA9ch+8qxpbPQuCUmmkKcuS9y5vJxtst/hS8tdB/OR8IBGJ/vVh6QPRKJcVXYH3hP4c/hZTKhb+WbFUruwA2TEUUYz65iYBQro7zrIRxTW1V+t/qZgz08PsoKRci7E1yVAZfDwmsp3aBokoJOJFDkMXLfOtqpfZsBu28ZWdCQG7/LgZaAjQL7jcIUJuCXHIRp+KWaBO5V+E0LlKIBAuvIIz8Ftj+Y8a61VjGNFxqJXtZQTJkTvRe7uz4cMOSCCqvK2hMJNhpE7tB5eZ04cZ7ez4u0p+BRyBI+OP/58KKZIXbSqEiwVrGDMBpNRsntM+D4pe5DKjupowKakWkTyMucaaUSZ92hPThbPgLK3T+OfS3sqyXX9Dqy+2NoRmw5Hf4YTkcVmv7gtub9e7cNByGp+tMMWuqhl5+lw1tEk0aMOYYIg71kWNMqMRLit07g/MLKYYXw6OPD1/ECjfjTYqBVAd+4LUyNdi52qO5G59Si+OZUO9tvhyax0Et9eQQEdx14sBCMtOyafmN4aSvT0VrBB/OVSWYrHZ+ERNc1ZPe5X8y3oC1B80GW4L6riuzf9ctbmivlZFMg0AhFIS20s9Or7LU/+5X0QndZlwsGutJ1N/Av53uU9wtYpg796BQ9AaKkuuR/D8zXwZxdqctuQOK+76E+OHtkV1C6kTfwNdS9RzQJAP/j+XgvrYF3T1lMdI/r4lKgaE52eRZDThpX7PDIrjXOr63gIjrvYlrmNIrShetMDObHQXJ+ZwQdE+mkatYCXn1SqswiyyZjvY6Cce5vq2F0GIBpkqw1GCXvdQ/xJZwG7P98YMKEx5DhX4e8NicscIWYfPbKGQDHZBX5h32Dl5jZP/VPlx7Dyd6JQL+Z9uPlMxOBc+vRVYr6yk0Yg1I4Zqim4vLqskm6mJjEUqhNIbjGx3+cXa6fajHrWVGlyQu2SKrSnXkyvfo9c7mnydAOmxaFxBMZhLyMJtgt8Kk9zzEFmwmmOnrha6mQvi44dBJlweFq1h5i+MNp4KHFa9IcvGGrEavLuI2hcoiAXDEd7hCnAtldpPeNoVF3BIYbB02prtaOI9l2TO7WJVEU1MAf1ZF8BxSBgn6kgX/l69/lA4KAP3V6l7lRANJQSd6lT16k6wmVbD6bW9EGadXrfgULnbtQzi5Fu+AYmzx3cbaAT0oFla1uChkF8WbnaSktQQ8zB9m/+tvNqgvao4nvT+QAnGP8a9/IQmfO7Ysy3uV07O';const _IH='923baa414785eda81b99d4aedafe041c386f3e0cae0178eece53281903fa433b';let _src;

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
