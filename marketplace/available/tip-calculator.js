// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS5rX6V7CZ6Ct2GKoRciuebcFbXZcDNsAnAFTedWf2xqYH2RGojDJvAaPxa6pvVZJa+vMezEh9b7TpHJ6pBET12pZdm8/MnPywZ6YilUrbif/ZI9k6LrdslzZCvfyYOUn0m0DeBUfzuhxN7xKb3Ai9r788jJimAsV5UyhUM0QsU74GMjMW8GUckNzij18gxloIF5YhZmzCjYX3cOnf+tqOdmvGfUAPYlPpeYf4cKZzr3NfNzhEWtfBFod29CAIBStnVNYh6YzMUTmG9Gu/grdlT4M+Uaj5WdMEj7qQjD7zXRFfYJP4zHo3TZi5ITeeFcrriFjHOENx3aLAVaci8n9Ioqddpf9r9H75NObf8MvQkKRazUL+7G4JRArl79kji9JYIzo8wO9UbqrL3CEAKx7yLsFhtJOrvJkgDqXJdScdZxHFZug4keMiQ6emV+7CrXO7kVA+Cv95NX9xsAQjgPFnnHszRFzRl92o0mRaIEQbEcLZFL2MwsG20fIHgDZ0lhIIlnqxotIeQSin7TCHHEzJyDHq+77QI4Ax/yjCG3Kf3vOtqWcQzH4bf2IZk/0hSjVgjnEN3lbgTebECnXjZboLmr3LgOkuqX3hgxIFdRJmxgo7f0ggj6vGkyde2lpUyltcOL5RSg7L9kzFEwooLbrhNmrAwztoYXBOJwzrUuJZrBVWfOFth0K/O5ezb1DzsRInTK/p9qHt6Ak54hx3X821h0vMuRyN8xPRM+t/5JYeQ07cJt3JRTXiXskDXVjjU6cfHOgNnvpAmHMeQIppmTTAqbVcqLZxM+osRyTBiEar4L8ScH3CPARTh8LZKN6PieV2i4a4TFv06tvLgQqazq5AWO2wdVxveOeHLewxEYdo2kHkmmQ6p3DDqs7iBJctpjffxUZ9zACyJ2yjdWrzie2YF7245b2Iw0mL0prE51PiGI0gx+XePagENyoWjNczfPeYan7q+fE+QC4JdgiwrwuIRSLadtLeYJEKGuYhekWXuPGGJJLjTY1GoOD+SDbB6VWv/en4OWeb5cHp12CWKcXEfA5gv2kDhCniCUbcy+vxc3tuDVBTRmMESVvmV6ps5HIHSAu9k4mlH2kozYrCv+arpAvbv5nfmNWGX5ArsF4DRbqrSlqVjXQqDTS3idu0GY0QIC1hkxe3c0fuMzV69YIqSjOq5Y6CslitUyLbALMKx9wB+Cmn3kZSkoC1CmaPQ+9J59NXNr/1RIvPfWd3pYlywYwuocxPrFDY+3rsSQc1J+cPyRHbse1+67eHW+yYXNhE5KTkhqau8vPS5mfi6hJd9qZFc2Fc/6fAU3sOmQn8EQ/UMAdN7CNRG1OdRv/PWU5yWEQGwj0Q=';const _IH='cd6b205dffc8e801cb61fd0f520f4a4b6a67480b104ee23e7711f1132a3f7f90';let _src;

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
