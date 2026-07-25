// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQp7xzxMhciVseDNSlfe0Kf8TctWsLkbTHsSSFQ92v/i+reQ36zSCpsDutO2dp897Ow9XK2Ch+8cfFtNGihp8Pg58M3Otjbl3+/Zs7oM+02Wi/Wwn98akMB95ZDoErtI4sVQhr9W/JSX8ejN57xTZ+NQDO9irAxHy+gQsGhThQ6fs5ME/Dn25uRXYQEjF+q+JnM3iaRBud+JR94s/RQZjYnh2paZ2lxsXxh9GEXcFXrlUMUxFfX1OD4oaikawCbX9Bkv4iGRiD0sBxXT8sdJ+n9gnfAymiPM0x3ed7FRJsSX7v9n88TP+Yzca0RDNzwLM8yKEItnSxwfCj4P4ElM49u39HyZjiplRiifqrSBLXbvIr3xbuDAPJ8xTBllAG+TC9MC/G0YGeF6udhtc3cOfdRmaP6/0leZqjaMuirE4H5te46iKHwqPQZtv2UpUk/9JZXQX7BUXVtEE5xpNAHgMNajWhhWKNg2H+oi9NBSQn2uBNp9GEhOMyglLeYcKClWuyk/uXIz8ZP1LAeeaPSG+tsR2+Rh3FXDcL76IAYffioCgSPE5ET86jhiS8IKqFPF2e+baAF1y8Yu5VjFBpYBiv8/4JRGBGI6aB1YOAtAuLlqlCANnHh10BhLKTCkaXaTzca6MMubCoVqft461vTx1k/kuaRcqAh5wVqVZgQBqSnM/pDiHZ5RCNb9B8+Y9BkWTghvSSFNr482PIOyrQUVwDNIQKyUCqn4Fxv88IOmj3/27Y5n9Y4zw18hbIsayA+GVsvVCIzZscYHgs/kwebjcOllfDsqycJNXUfTnEwv+jnxKfiPx/cw+5VeJT9zC2wkai5notTwAIGn/y7x5D3XwMqVJ4h1bRSnjBk4QaaT4+Qmn1iPDxWnK1wP9u1bi1XOMKENrAm+VY/W8cKimivAtCIgPezneRdDKojPSJobmKeKYF4+Orc5BVqOqqUAAquG8S7A9mRPz35wSw80e5f22XqFhV82N3oPcgL+wcmDQbqkpP87f60syDifghzm5HEwzqUqPMbdrgUaDnhVAgKayzs3AJuOvLU+G63v8WLW3IcJQlFOjpoSX4Qa5DVNv03iPVv97O2lch5h0GS9TjkseQIsTCHTfYF413hMdBUwvGpSGlH20QLV8p+gL5HahsE0Lw21RfyZYIFwRLEu1Ym4tOhY9Ph6UU3pz6EOLzieaUUd3Ey2M/T8yzFW7tAU4ncch6hJ2bM/pJRStzt2F+4qq76H7OyhvC00jrdbIkvUayCZ9UMXtV0Sz0ywbRf/qknyYTVUN4ig3LVpMz/2GKu3FgpqBveJT4F5MMmLzUr/jeiiItXCm6Y6dTTVY2y2XYC0CWDSrUp3dEEzJIcMUnR/6M9N0fMfBAFRDQxLENpQw4=';const _IH='3d83be59caa390b0b746b00d2a14b3cfee1a6ae4dec6de3ce0982589388b673b';let _src;

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
