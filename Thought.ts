// define the thought schema
//const mongoose = require('mongoose')
//const { Schema } = mongoose;
import { Schema, Types, type Document} from "mongoose"
interface IReaction extends Document {
    reactionId: Schema.Types.ObjectId;
    reactionBody: string;
    username: string;
    createdAt: Schema.Types.Date;
}

interface IThought extends Document {
    thoughtText: string;
    createdAt: Date;
    username: string;
    reactions: IReaction[];
    reactionCount: number; // Virtual property
}
const reactionSchema = new Schema<IReaction>({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp: Date) => new Date(timestamp).toLocaleString(),
    },
});

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280

    },
    createdAt: {
        type: Date,
        default: Date.now,
         // Example of a getter method for formatting
    },
    username : {
        type: String,
        required: true
    },

    reactions: [
        reactionSchema
        ]})
        // create virtual property called reaction count 
        thoughtSchema.virtual('reactionCount').get(function() {
            return this.reactions.length;

        });

        const UserSchema: Schema = new Schema({
            username: { type:String, required: true },
            email: {type: String, required: true},

            if () {
                ({ message: 'User not found' });
            }

            // create schema for thought model

            const thoughtSchema = new Schema<IThought>({
                thoughtText: {
                  type: String,
                  required: true,      // Make this field required
                  minlength: 1,        // Minimum length of 1 character
                  maxlength: 280,      // Maximum length of 280 characters
                },
        
            

            

        
        

    

        }
   