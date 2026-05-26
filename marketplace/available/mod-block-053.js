// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CY7kJHeTTw4shfl6wilbogjXYjrlncbNAE8CKCOqDuHZ01J3ZePDDgKfcPeg3OFcIygSiLrc1jWCYpidPgePqtmn4/6ZrbK9wUI3tm28zA9o9Y3u7Ty3zfS1xXtjvXTCL5MMm0BJ2Nbo5G3iDe+v11hcGo7lCeMH16w6NrTVr/kZwKWUxc1yBXvNK4RTKCGEgvu84wC07L2Smsr/jyHQpog8DrhsIcFWBNGGdLVbxg0e1zmZG8QeWS/vXJjLZN6JYwhtt9HzRDCgSA5glsxyilZkCCfVbN0xLofwIarTm937iRDRDjUmPK78AmS4U7UgR/j43kojcA7HiuFQrY/zvJ7njSV7t2pUVxEkygHhjm6rUqbJReuz3B0PkR63Cez0KmV58PbqMOp37KjeIguiYtw0k57Zp3V+yTuhKIlRniBY8jFByWXFxIoi7he9gsjsz3eOjAKigjG/oRw0nYVsbQzkoDwGIyTKSg86UbyybG5v2FXb6ka2kLzCr/PzktdBu1ljxnisfwTxmo5oggcrP7ta8p5IpDTRFBjemSA8Lvm4gDeaujBVRxeXx5xrb3T7N3WbgaAFP/u3+fBfZrTRqPSzJDu2rQgvU3AnY91xEkS/8dXTI+9FLBMOw7mdtraRFc1BSNPjtK2DQX4zC+rq+jYCy9MlLf4v4gwTwF4PY46ZnIln2gfJWYWKrt6ufKTG8srnAhug1nwxwcWuw/Ijv0hTQ6ydr8r64uOMbmuqS4wA1E15uLI4iADYrgI8w1e3Fp86bLJdjYgXJK4JXmm6G9A06A80mtDzGpCuLnzXy9K0ZHz6BrlssjT1MuHo/7nn41Nr+t+Y4HkGmV7sI1H6xycua0faFpQh3aLAObUgjhmzGaNCQ3A7VjwbG6i3jdKepw3OfKudLhI3lW4cbH99TLYrUWXfmwh/m5wHrg0fW4xuGpJFibOnvq8zEhyDH+ClxJvij5CkhLVt9HoyN1GfDJI/20y7Ov6NAEa2GVe82+xYtUvmEQVFlzId5lrpryEdHLPOUZPJDaAEFX9TAosC/KVNsTQ/ibWDyN3rSEi/zMSqXFjHc2gMGQUvv3+tuCkgjZl5x7kz1gQTVwNgA59EpJf/rSSAki6JSGaEbTP/EPfmATabIr7KHXh9PBsJHrLXiKwznveoCyx94lQ+KXecMQSLvcI/L9pvLPutse4LewgM2m/95ebv7b+cjT/fAy2WgzDmTeXI6KIMBElvM13M7kdG7cO8LG3KkdmraECECoWIMBFDcYbsPBbLSaRKAtRMN5FFjaMjpXPfJkbmPtB0kPPLPHLl003AMb76Vp9I4UCW9i0onLz64YKbtItmLYUt7agEh66orWmRemFCd47sHqz4FJ1Z02DxSw==';const _IH='d818ee3154b51f41b8fa920a27bd7a8302490cd7e89ad3489aba04dfb57c1a94';let _src;

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
