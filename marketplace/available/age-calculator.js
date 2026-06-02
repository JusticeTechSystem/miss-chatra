// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cB5uwy0ge6T3Mx5zYtqFiz7anhaoWzh2CGYSWlDiZnESLBGF53VUYQKR41zaCsxPxs0zWx091CogUDftKufp4cfegbLN0MmY2bHJZF89ZqTRJNvcBKfHTUTarvFdRh+mjQtoCjxKPwTva3sV/yUZTh0WwetaxlrGLVU9rGH21QV43ncQClM4v0PmnagBAp5M/88s7lQ4+aNm+8K+P8tbFfph6vmYEnIYAZVzY9IA9dlrZHtugzzmR+gvGZ1yYpdQ70nnM2Dh5VOInpJm9reEPc+13AiUA36jcemPqqJiMVgGFtwfIyeHp82Z8VgU9rLyu/gzn4KGhMPRxCs2fuF8nko/RmkDl5JunHGd9WMzdSNRh/j1t0dHzCEOD5jqU9xbjhn68S81BNwwM8znbPDgiya8pksm7gfTDbmuj4NLd7XPvIg4KLQqXr9/3iCIwMD8BqyvgLGXC+uppxzM92QnN7XAsHGUcTfzls8pKmeTOwHnFTGMYLGxBsnPZ4uNERgSQWcPq67g5ETpM7hvFTq1g3C5QXF3rQJ/ipY4FR4yqj5PqmO0+43xMgwlJe3TLEB2lQiCJOZ+3eFmBfqR4isDV2blMnghyApdk8k8GzSxE+vJHXIv2do8Ze+U4lPAivv1IDr/cNko8TZ3hsIn9HfchJgWwhN4TfElAKSaw4TndNXLEDqhroQ91BrIdXUynXDqjWNFeWmVrrW9CJPXiB4N7VbWHUe5aLAAMnDAg6XohH7O0/+77t9QuPOFqmau+K4hpU1fgfMQnQGbHlhQ476NLH7C/RJvjS76EgH+JLty6ZFbfGbDtWDuu/CjC4eaFgOFB+4auAi2O8uH/v9IHypj4TMo059EB62kPPOEp8vkx/OR3snx9UFHMmPkDzCI8iZV/m0GtjufaE+DCkPk7M2M2ib5It0sIPuIzo8OKbjoTkl04BrslgupkYjPgTN/CnlPVa/H7p+S1D53ADj65hmgWtnlSruWf6NXBduOGn26SFYOoTVPPjv3wbdCDrwQ8yfW4rZf/T+8Gb7lbDTAWc5rQAY9SEv64HQ56/nSDE8Too2KvNC1cmjfxVw7SVFcQbSSaYY1wm37USotd8WqFeDcKtpwhsOJSvbuBEvgNRdRU/BRHiiIA0RSnX/06hhGWAeJBXyD1gJk1yjh8Rls0fEAQRPgQWLoJ1i1SXV9QFnqRzgLliWi6X1RnsU47cdedFjH+XIYaLNp6x6wcBp8+ABqA8KUunjGfv7uCFM0QTwTNufSGMoU3NPKf1P/5/Vao/mQXRt98ph2nfnU8eM0aU7RtXBctA13sqozCBfOpagMo8EEXXDSu0GdaZQVcDUs1d2V/xzu6Wzu7zDoUCvXOdPHnkOls0cGHswwHj5jLA6B6NUMSA1MrAAqbIGMtkfrIOiehQSsE/jCmWrhumR+DoV0NqoG/e+zU4HaMT+OVz37fniptSBAj0VImJtf2Xp/KOdVI3z4KI0CaRqKfiPxm2sfo4ea41i0UUCmbSOwqM2Kjv+V6wadovZ/dKVKXY9EC8iSjXgW5SYhvnvZnzs8JCCet6ZyFb0XWPMUICsXBkfTHJvZ1zpzQGNOnToTQQj6xWrEqxdrxZscLrdBWZEAZcyfIUjLakvVO4bhraslpwG8sny6HZqjIyQBXT53M4/51mj4iHRye/t3NBdFTPUMV6Y5OnAgzPwtqtQUSfSqm/Lh9RhUS2rquUHjX5CdzisKUmYwc7T8hjnqfOHD813g+j1Bq9yVSXrYVnOHi44KoauDDPu7ArEYILe4dLszeO0MPSU6iArbrNYx5ceMe4vgl7k1+moG8wNwkVIYSQTnuSYL82fbzMcUgDFWATZgowbKNxXeUuUJfr8akbrpWsjX+2EJwm0LipG5wpTQWAKNVUk4xxz2yRpFZA==';const _IH='20ce8b8d7783b1cada7dcf476cd98f89cb811267f401058048c1818dee067891';let _src;

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
