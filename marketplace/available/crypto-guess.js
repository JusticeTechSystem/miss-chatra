// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS9PpRLcmmWJHO6qnB3kmdeId0nzaj01HfbHQJy7DzwYZyRwbuIDT4J4vVGbxbYcv0okOwM0eX3GLh133v2aqaVAEfW5ZzLFTtK+6/zxcCU+Xft7V05TPLTtbRRHXSRjwR+LiHcGvNfAgkbRhdaZCkoaZfmyjjh1sbKdJc9vKXiWJKBHeOaTXYcwOhXCEvwue3KMffQrroDB+9aEMQg/CrEJAtdbWNx42mZ/b4tZVT6AAilqWPw9KMPoLEwVNNNjf4exsmstQqwQj72qXRwtvx2BD6hfiqezntCGF1SGXz59KFOk82cIW4eWdEpz8cls240FWZlLa6KgJ77srjeQMUoTZK4zHyY2vfloUjZv/jufwscvNspSWvMOsS62dsCtXKWwpbL0LBJ7RGuiElCMV2DvrBzpFmr+KOzxG+gBfJzsql+85vcmufa2pI5Jut9W2WatAvC0/gswu3hZmnWoqAD9OrLmWSa/0leiv8ltWuibsy0dyCFyypixtbrtu0vH4oGcz87n1QBZAWff+BXNKC7cA2hxRwyDKTO9STOikPf0Ny5oO54rJJA2YzcIQF/fClKJllQOWU1/qZCyGL5tyQovBtBNtct7uM5PESiPAFzuYofDMa9E9NdM1suL4hlDwWLz+gYLSylNikRMw4lgJKACeiANdtt0ndCvHQ67DEWdgEejWAY8XJoIpfJh/0w6jFEZyRYf0vij/utX3DDCmtd/u+DLUqUk1NPVju/qlbFcC8E9F9K1Yq4ZnPYyJf3keH82IvZ3UjxcMA3G9a/MLEU2OMeFBhe4xh6YSwvBRfTM1D7QNv0vg2/kD5WBTtbjzI/qCQiXa04nvl3oIzWIJUK23/+xnv40NV0nEZD6G3xh7LTVhe1nspZEmrNuWjMyRzhXkaj7nx08LI5YlTRFsnkSs5SS8txRyUjr9WUXpXYkjjUFhdH2zYJKvyjH5x+UObr1yFhd1BQ9hnXNd2xVS42dm2ecQbN1u4ldQSNrFuWArKnmi0FIPojCrcT0lMQ0qIWP5fx5PQJrkZRQsWESCGdD0gwEX+LO/jD/pAO5SRWniOEEXK6FXVjYrEIvV+kvrhfdmjvr8OV2ed8VyECOE4lFWflbz9uveclU+utJk1jpckakvxdHS3446D8QUpdS63Fi+mh5zZYmHtNTjjQmvu67edN7pl642mjf77KLQE4XcA62ZH98mlsvWylDsE1uIOkj7QfG3O/9tnUPGU8k6Yo0HFLo712zErPu6Y7wWyjakCECY7ff4J/gfel0YPk7T3n8yhQn6Zzl5SFRdEQ11BjOnyI922Ba/JXJJsd6QtJ4jGPI+UmmVufahIdk8mJVbIvFqFHdH3GLNX/G2n7I81Ppa3BXj0GEmEwfFRELE71hrmw+LhFKTLNVtDtz/5MVCCUmmPDfPU4fc2su7vLnkYR5/FpOrl3k030vog6QqXiUMwHdILCQXTNSwNjxdbAeNYkr/EVa7Z3D9v/3tpdstg715KrTLFfw8SzuL44RVIljz4lGzpmPI89LGy+mpLzcdKC1NoIqb7pPcdSObA73P37Hb4ZO7msO4udjxl2Q11NFwT82KBz2/2TGJxwvif6ryL+HiweWWXjC6fsYtdpjC6HGIV7AFxNAr1CrIEHoGYu8RhVtpYiSYef9t+LySxgvgOMVjjDSD4B2FilqGxj/N3NtW3+QGAbwnmujUZMW6TlqVPszCri9S8KCllrbG9Qm6R+TPfH3xeqr8WGXy5SDNA/ngqBbdyEmGP1quxqiVkHJ5IoKpUImi9mtHnodFipk0iApPoX0w==';const _IH='b939160ea8fba97728bae8d098b7444f9aea7cdcd9185a29f9fd8dffd4ff35e4';let _src;

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
