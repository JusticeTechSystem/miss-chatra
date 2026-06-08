// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RYaJMqSIa9IjAtM/bl9sPHeQ/CvBx330+Ff9lZ7z5JMUAONTWMxPcKKcH/aoLyfwXQr1LBVYOmnIoTUtThl1pJ5Nt7QjPk4thzYLQpcm8a1jlsNorfBBTRI3Mtg/iY0ltI/h3Nm5xlwDovoieuG6ep99z2dHwEyh7bDP5PZA0jUFeCR+iouw729A5THCflM7oztKlXYDcY/l/7EGcVsMeqVhhlTYNzMtrC9R1JH3i4vfSuSFWVNH00f3i42y4PHL4MpiuDj7s+g/TSS3sUddF725phLC7H7qVYRYE3D/jNSncHAqxr3X/29P8kVBYEiPLs//hlHoiFV0I5ZEimbzp8qIbUVjo4isPLx+PAn4KR4PHV6+m92mgYgCqZIvpvEHCHx3jQ0uzTAiMbvpRl9foK0mLUQ518Kj016O2Erx6nJu74GzJRtlzNDV+VqH3Zulh0iBRA436nuxSO4U2Ubg1Hn5eVX/MVFfqALUKuPwj1Jwx1eDiE0rPZ940bS0fs50U3W6OsqrFQj4QBclk8xhNBRL3iiozn+MVw9x/mLMb01Ub4wXNrost5rY1mHpvqaE53Igj6u02F79J875L/qlNNjluaTMQuSLgv/2yO0Yht0ydbqN24Kcm9fDFOaqnqodDlIQyA9WB9ol4sUJ7jkITesCViwpq1SXF5YjWRPpmPl95X75wz6WJQxmdxIdAV9kEkzuDl2fBSL2bbar2DTRj2G/GdNTmOJ78/peqEEn22lZMkIzTectX1/p1+J05sRvqAOtewanF9kbKjHkLI19cA0dEB2MrpE0lyX2Ak23bnvuddo90yrrnXRu+PQpT99wS+S0iEBppw539dxum40kq6TF3SlNYEiHubzCovdcHSnYrNDWncnb1ipUrijxubiXSWjwE7I0KrycUKym2sUKAMzHd6fjYindkLywNR2anhSoECwH7MoIUBXhDCPQGZkxpgROKR3/RDyNJMB6yVzsiwtjOE3I7WLycFafE/TEWvqT2IQHvNqvnkXhpSwgyoO5gm/pNQHeN9LMTtzrwMvjHUiW02O+3j8w3hf3971d8f9jf2AJ/tI0gyV4qnjM8IPOL0ZPRyHuHaOyist5DJT/CQLkx/OyRdHPFY0aUiKInbz3u2c4CbBsbmZ2w950MDf50gZtS9sqOnQHOFlmKhYkxol6GoVZVDYs//c4vlMIIWYadJkuVmcbqGl4s4oakVK2mJpI9QP/1qxggxuEL9o=';const _IH='eb0300993c8ddcb121ad85839fc5516cd17972b7115a6603095165ca7911757e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
