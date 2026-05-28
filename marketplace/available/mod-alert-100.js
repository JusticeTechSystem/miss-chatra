// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5hny4NSP55v0ymi677SFbJ4RSda76h/Hnc7oSmwm6Bum0IXItl4ckgZ7+RxsTKoZQpbcXE8oJzah6UGerrAGo6IvpyrO9Aeg9LjfO2oiQeBmZQse6Zm2Qx27pffhHPPEQL3KMiYA99Frr1uvmoqRfx65EHkrqs8LL/8SsaBZORI5l0ticI7y9Z/STO05NkfraC8oOy38a3p4CeMzIxid3bsnzEM+xJ6a7E04XaIkw88q+PUyA88ZtXnV4IbOWbMWb4DFOatpfFmxC4fTMCCjw+Q9bbfldeozt5ILrZL9fggPxJx9vCOp0aLDB+a5fYHq3yn/COK1UJr5oD+yZvlcVJSqObGzcAAPSy/cLDT6DdewG6RmXPizyZ5nQxuMdX56iDVZsPIYx/JFZqpPpf4qi6ZVEU1njnj8cOAKrbFClVLiNlBVgEejocq4gTSVbh/4FIQro+Zatg7r6pE+8wAMEu+hZ4n7VheIOtfTwhf6RwpJOBDr4g7me4xj8QrD8YKbilAJ75XQK+GSuvYWZNBMHTCvf4W9yCoe6CMCxbwBN9FYP0JSbnBOt/pZszFE9cUdUwKuTC/+3fuKluoaz2AZ5rRShGJi47aZKDdS/mERUFk64U2UdVtiFGnGqc5SUqJ4LrQorYdzpk6f5h1PeRpNhLAhmMy5Z2xOLVRZ/gR8DLaoHaxzyS6Tb9gQqk0aVtfvNNlJeJE2RQTo6dUb6Ab44yLLqySdPtb97nyv3tx/p+OfopTp0SfFvZJ15z2ei1F3gTtRd0RTCNa8caL7v0Q5XFrYzL1kCIM6ZHQWlDh9ru/zNEjfEBy1ehEwvwakQhpDGz9PfsMvDT3KhS60FZibZYR3aAMwq4ai/G88o/Vyw3asvxZAg0HaZxHk6RiRRVksj+6KcioOxggToo/6iwFsB+lHHZDuNLQbqpegPY0MVBahoudDca3jb5wlveme+NdOuA1pG/cmurL26Iw8DAYX1950n5zIzwsd8+n7t43CToh+eiE1d78rkNpVUcpxiAqafkFYsI6U57Ax1uFynhdnRYKGMKyKRJatli8sM/EuJPJ6XlApfmslLCmRTVzbWAnb3c65+2mh+NfVF4HKWmYGWAd5Hso/+5EjM6PPmIgLgQBtViAVER0itxbO/IUwOokLauSxGgLez+X+Lyyqk/6geFaj0kfB0hFzeWRPoSv6qMqPfF8w7GlwDscJVYcxpbgp5KrXU1fo/ST+eXkamJgRM7ppvv2Getx36iZeUSXrf6mCakXVoN85WcqsQbFhh5RmGAflmlmAUzmdy5tDHtrjiz4ryNv0VLAOBcNxcZAW/A4wHOGavHgUV1uFU4lZqgBOZ7UJCM7OvremEvqQzvbYWpfreuBnIku5tpQYMUGu';const _IH='0b449905d5fd40d76f719ccea29551393e70e4064cd66994e2989405442834e6';let _src;

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
