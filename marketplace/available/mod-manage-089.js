// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='E8rK/RHvW3E0Ga3DoOw61eWCTTBS62mGmrCztBLefKExtjWpYUXvflhQs2o+iW2WJuic2mp0Gbw1icsG4bGj1KmGClgbER9nu+a5PZcjWJBjQKUVmQ82awR/AWWB+oxcp+YDBRIh8RFq5iE37KcqShOoVp3MCFfsU5mriG4LXRoj9Bjj4+BYQ8BJBR5CSp/c6UHaRYCrJhsLsrJZaNdPk35zbAfBUnkvcR9yLFihtCRxqVVBXIjzLSBbwrBDseF6qEZ1I8Jrt8GVx5GZoB1HGcZYKsGUi8RV7pixBRSNMHxAUM6I2QKkVE08VpbjnxPsGUCxYbLpYUKWbHBgqjbsp/7gncd/o7SlMb3hooUvapK3qoXqBDuSqZiG0cxdin8MdDYBxln2denWVtuipFj648tRrL2dKxc5mkh7dDDdIjXxBWrULygMROg9yvEbKU2FisnYyK2WSRkyn4QNmrYAKkqozf+aES91kXtfD6vyMzP6Lcz82STpLiM0Dl2mbpg7HRNM7Ygfkm1VEM76mdqAqp36Htec80QnEN2LA5sCOrPkuUD8ThPezdf1FochIjvFZG+HzvKVuheXFJRAjkugN3SlonIsBNt3kL9F5DmmG5lOkOVZdN4GM/ZvfOusxoklyHdV92O3yP6i+tyAJvgQp7RCmpGKR+Abe9tGw0zFF94kEfCPoCKNoZAjZeTa2C7zx5AlVE/F8gREHUgWMg5f6S+6EeFLhdJoiGZzV1mxAT11e/QrJ+9koLDtzKCimIiFi4jjCbi918aOFZ8piajw2hhlOwQKPYGeBCsFW5geLae4shSLnL5+7iXfnZ8pknjMdCDgbGOjYSmsoFPIg2EZxWMbX6Sr6mh2z+pQO/+bzI1TZZcY3X4ZWLodaM1Sh848EsqJfFw8+5uKZJC2ymdt5NGBCFW2PH1wUNhTFcRqMU4TPVDiexT7N1N3H2D/bwQ5rC4uESe5QFRbf7AW+9kr8jHqQs8zH31kMKM8krw1Q3yZNckDv12eMNZsOc+lQ5kqbpwSuzkT+1pLoBT3MOAQjUVNMoxnuDotSZA7FeW5kSNAOLVEkgNTUVdCwEMLdaVH4IKCIoE1CgRyfwIzSJnMZ3tBdMmB6xuNNudao8dej6FxfvQ/lxej1utemPwnzbKIQdlOiFbOIYXAf9iikaEv4fiwqn/c8EdrOHkamSQBkJBDyi23Idce9rz9vGSOIEpAVJcfY3rsBaf5tValAQK8Dq0UNHw6o8CrgoEwCGZNchzYeVgYlNqx89N6H+mGmBma8FObIqubvS/uX9ckiOGNtoLYE+Zd0w21NEOuLf+SJmQAn5Xknl4LqfsrFNoIWfgfDXJjxfavWfNCn8YOKqjAJs9lOnNWlnu9BmfdY7jSn9q2PI8=';const _IH='ee4aa28fdf842002cb090f6a7237b6de56a2ae011c8843f1c6036c1a76c9e1b8';let _src;

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
