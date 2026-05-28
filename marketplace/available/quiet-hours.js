// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1gBUE9HJ2J2Ss1VlreZRFqw7heaUXfve58Tw7ctonWKAzo46c3J+fl46ZHFYBDfFKv7Z0gcZrgCVL4O6qPSpckNCbUfKlZzhQcm+GW3DBqjTdKQn+8BGFwHKsHEzPqndXMBS1UFm+eHBIUs2LsNFiI1hlTgHvSYj+9G4g7+o3ytG5hFjrunY9G48gX40Hcm2vQwYFwojSqOMF/sEpj2qaGwXJnOqDNJhsT+2TxpS3QaKDxIPn0dSu9/l9WSUhSc/0bwvOKwAP1Ixp8BP3Ww7vEOCnAarPq4yAbAM1GyUioj2sAbuJdAp8g+5NaUsTWsNBwegQ8zcsTaR8iQJrDVBzoJoYq3BKHoPnI7XOTlNdby7S+tCdTwIhEgtxu3o75kbZHCjfSqU/6Txnnx2bGLGK+OSO1i+NkW4UHKz/OiAnT6fU7CeBoudodR4Z1b3+XhBjzE+Y7rAf9D1D13JQ2TPIeUUKPBsQfrz4EcBESXk9EtEhOYFxsWR/yJmvm7/SRjh7Qyw5C0rydzQyudtxOyFJy5+9PMkjuPQNzWdiFN+T9xSozJUpvol0V1012ks9hOe17Gj3JY1QwFlnkk2deIFk6mbUanhNJXQQFHLyltTs/7EHB2k6/P0GDQW/5XBBVhdfyMF6vDDtU4khV289xAHuSiEZtNVMQhOfaazD+hwCG+8JuPBVJ/vDS54AAt8wJbHE5XZ0Q31NoHT8+TrkCaNVmj2nq6s4wfBu5ywRRlF5LVmJHOadRATrdH5aeRbEaL6h7XjfgFbP5+zWxrPEsduY3peEBjJk/849QL+6sw9USDuaxexWiiJuJ1MPUvgUXIc/x5Aq5o8SE7q2Fz/2IejeaCAXuKSTv8fqN07yPYn6H/i5ICReyOZ57QtusofX+ctfbZFep2nZQTQznr03CP5bJwrA5M9a2rWNNnI7r+a36Ui4o88F1GKEKgj9upR4+wWd8IYbjzM4DfnQR7p8nuP4kForYGS2cNBOrC6VZOvDklmbenaV8LA3pTI3yLy3MlkP7vtyLoaM+vVUEY7MnclBZoXgXfG/C+gMFJ0BA2Lq19GidLAAf4DolZz0AcJ1i/c9LJ1JSYsvcX6Jq8AR41SDdXCxckTvLdsr03sPW4X4H/QjAxwgfAf+m8JoXhqpx9c8YDh+tyRQ5kl0uN+gy31k0lH2M/LVYSu/sARcMLx2JP+FGQXAjPZmY3Wp8LA3IEV11jrnWfhgH57QOWEXhDFBW+HsiF5IcZ3Cp1E/YpFGwlvi3xj3hnYo4c8gYcHAXC71X+C0lq7R/3Ui81EM3NExb8X79YLag1ct3NwgKjE/LHWx5oTTakg6CurbiX5vFtCiWjsiy5QrTIFpMTOytNvJR6dm8y71G0pxuDCuRcece7QcAvwuZruuOwJCbkxZ2G9DGdvxMdhIb89GwGI/kOnCeH73fCT8kGSH1CHfXa4qFm4S74Uw6Fy5C7f32oe00Ruj7gXKoRuSajCGg+go3NCGt0HZ4tVOpxoGEjaYHg6VW31KrZAjubZdsbfHJin8pMcfuA5dWml1JPdZa7cOlpXISU4a8wdFId7Rad55dXz+AIUFFWIebXeIKXsTViVrD08h5VBocky8kAVMWLT/vJOaIcNPb191CQzIwnPcaTikElDAFmt8vUtFy06djJynegDOL1ytpLw3s16dutQtxvZyxF6s3CBrDrzLGFG8cYlsKQo';const _IH='af0c94bfea53301f7a22f5c2654d10eb4b0909d041d04fae85c4c29ec0c11f5d';let _src;

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
