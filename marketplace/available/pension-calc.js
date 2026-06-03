// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nps2B1dUBN6TK3ZhT8L8y4ZPQfPFQz0woucVTtUTG/f37qEbjzhX6iepeJdOf+LqLW4m8uohHBJRhXD6KzVZ10vQmUrMR/9iDxO8p2wQVszLeOEh+QW9i1SNgsBwqB2+me3Lz18nWmbwMNP4fGRrnwnRwE0NzMouK53X2MBYbYnDCC6ad+fZjKepAzoPOZRI3PVx/ylYu963WQIb9vf9Gvlnay0+zcR6a7CIvMeQPfVhvYLVF90rjqY4FzBJGJ1xyreMu8nIXdmiPGDirKFU+SqDcf9jZFu6fh92WiO/zwjwxgi0gS/QojiZdCIAtNv2YdKOyV+oHBB1f9z2iZg2fU1jlgAdXn3jho52O45UH6WqwTg5QvauzbQd8jAmb+Or/RbzgaAsk7Sz9ATyWYMlDpOPuUy/ae3fbaxG89YM17sPlrA9f3PktdxvpeV1C6Y4JwZ9wY2giioP2YAjTRevYJkWR8XApnuWwqaAC8QtgmIvAcoNnNEJRr9yFlNy+KzNx3X3e3yTlq29qJAL3OEaIyJA0s45dJziQqRrH4CSEkQtnbCK2nIcmhRN7tsm5vX/KiCWrmovXE1sdA6CWdlcwju+zDj1p5OURBIh5ghMcho2ha81Cp1sgWckE9X9eG7gIIskhNzcuwE8rnPnMujFmNEidCOjpnQ8nswHTHz2iCZWfEODRzfOuiYi3PR2RuSD+PjK7bU1JOM5tL8yHhhHRamGz3lcx0GF+kHCj1jbqQTryp3GuhaSaoiCrSiwgQIfkHBQ2V67GYBTSkA/NBlQsDF3v2XxO/hZTTFKgytPBxaUyef0Q1Qc//5zF/hgCwC16VJlAGVbXxjmL1aH0WcgMjSc1NYhWgJ0zH72KN5BfBxAtMRd5RlWA7BiYR7Qu7NBbowocLPQuv4xXgB7Aj0y2mdF8dwfQ6oXlFXAWe8R1XJmEFtyrZwRD2MqMnPE5atZriGxrCAM2SgHCZ+6JnWnCOCL+K85sYq7eELFRNU7ebj9Ud/ByV1ia1QBXiKgtUZVWBXCJEfU/N+qmIgKOe2rQT09xU1EYAuZR7Qo0s+KawQCVRpOMlJki88l27sDTqAlWS/pv6vEaGsujyW0b0lr6K1ndViTd0fNgrjAe8FtoqmUXwUT29z6qXNFkIsBuAfSLZEHMWyqgcOA2m0zBbTXNQSiCdnWVXDS4Xj5sliB9QJXFRlw+KGei0fsOgd/EWFu0nH4N6C+bHgTx6r6ixb9RnhbplPxnHP/TVBX02iu3iZJGbp5UUqpaqq5JcdATTDYUmDiRK1lEC3gKftWzYGcgRU7ErMDzwP3Nx0QtrOE+bCIjjJV65SURA==';const _IH='223388e25b85241faabad61c5d0cb182d6423593695629cc6e4abbe39a4b0e20';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
